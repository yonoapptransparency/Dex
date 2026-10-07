import CryptoJS from "crypto-js";

export const KNOWN_VAULT_KEYS = [
  'Gxgfhf54x_+&7_gxfhgxg&*&*&¢%fzts"dzrX&*\'zgxf_,6_5*\'"*&*_dzg_*5¢¢°%¢6*_fzfzgxf_"6*&zgzf,gzg',
  'YonoVaultSecret2026MasterKey!',
  'YonoVaultSecret2026MasterKey',
  'rummydex_master_vault_key_2026',
  'rummydex_secure_link_vault_key_2026',
  'ai-studio-yonostore-key-2026',
  'fallback_aes_secret_for_local_dev_only'
];

export function getFallbackAes(): string {
  return 'Gxgfhf54x_+&7_gxfhgxg&*&*&¢%fzts"dzrX&*\'zgxf_,6_5*\'"*&*_dzg_*5¢¢°%¢6*_fzfzgxf_"6*&zgzf,gzg';
}

export function getAesSecret(): string {
  return (typeof process !== "undefined" ? process.env.AES_SECRET : undefined) || (globalThis as any).AES_SECRET_GLOBAL || getFallbackAes();
}

export function safeDecrypt(ciphertext: string, secret?: string): string {
  if (!ciphertext || typeof ciphertext !== 'string') return '';
  const cleanCipher = ciphertext.trim().replace(/^[\"\']|[\"\']$/g, '');
  if (!cleanCipher) return '';

  if (!cleanCipher.startsWith('U2FsdGVkX1')) {
    return cleanCipher;
  }

  const fallback = getFallbackAes();
  const globalSecret = (globalThis as any).AES_SECRET_GLOBAL;
  const keys = [
    secret, 
    (typeof process !== "undefined" ? process.env.AES_SECRET : undefined), 
    globalSecret, 
    ...KNOWN_VAULT_KEYS,
    fallback
  ].filter(Boolean) as string[];
  const uniqueKeys = Array.from(new Set(keys));
  for (const key of uniqueKeys) {
    if (!key || key.trim() === '') continue;
    try {
      const bytes = CryptoJS.AES.decrypt(cleanCipher, key);
      const text = bytes.toString(CryptoJS.enc.Utf8);
      if (text && text.trim().length > 0) return text.trim();
    } catch (e) {
      // keep trying other keys
    }
  }
  return '';
}

export function safeEncrypt(text: string, secret?: string): string {
  if (!text) return '';
  if (text.startsWith('U2FsdGVkX1')) return text;

  const encKey = secret || getAesSecret();
  if (!encKey || encKey.trim() === '') {
    throw new Error('Cannot encrypt: AES_SECRET is required');
  }
  return CryptoJS.AES.encrypt(text, encKey).toString();
}

export async function generateSha1(str: string): Promise<string> {
  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
  return Array.from(new Uint8Array(hash)).map(v => v.toString(16).padStart(2, '0')).join('');
}

export const isRealValue = (id: string | undefined): boolean => {
  if (!id) return false;
  const clean = id.trim();
  if (clean === '' ||
      clean === 'PLACEHOLDER' ||
      clean === 'undefined' ||
      clean === 'null' ||
      clean.includes('REPLACE_WITH_YOUR_REAL_KEY') ||
      clean.includes('YOUR_API_KEY')) return false;

  if (clean.includes('#') || clean.includes('!') || clean.includes('@') || clean.includes('&') || clean.includes('*') || clean.includes('$') || clean.includes('^') || clean.includes('+') || clean.includes('proj-U7m') || clean.includes('Db7!Xp2') || clean.includes('Sy8@Kp3')) return false;

  return true;
};

export const ENCRYPTED_LINKS = "U2FsdGVkX18sqpIaeFDLtR7DdcTqhy8rS36ysxJ4g+PFNfroWrqxrGU+Xa79svmSDy1EcXGut32aHqp02RPTuXC9mLA598B8qgQ4r/Kw5ZEdstnURI+HX1iB2zZT3tbBx4s3jo48qeAnEgpqHnxHOWgF1WLoEVsJl+Mp9Su/fO7ELgwwpIcNrwWOkOrZL24SyHQoY2q1TlwuhwFnViXs8dcvA35OUBwvuc6Rd9cOHU9Zag0ypgIGeQYU83qIv76Qujvve/Ia04j8yNBaaIDeCW4AssaFrEEQuANtykDpAeFikkhV/B6ejbTEsi4eOMfNfIDXQoYMNPd8mFfB8nOoF3s9GW9G9AGXMCA912pGbOex8JxVaRg1M/Ls9cyutBzvXm/+qlWkzBJQ3ry8vAH7C4SybhUOnr5iwpjnxs2jkJiR5veAw3tI5jP4MiIyIkthntgGmlo7PJGPKjy5/ajIOfoNWG7QkGmD/mS/XjjCLTviDKC4YC69T/i3RaSBKJ89OfvvBUiRM0l8jWX28iHP6qT8mhyUsIfnHpqN+o+rybzSANjcf+wpzcAl6wO3YrBJwH6Ab2PqUNGUO15HFSgAyWx18wc7dRFbyoAgDBPwRv+D7gIvbWA1CrfuMQ4YZ1Qm";
