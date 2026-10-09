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

export const ENCRYPTED_LINKS = "U2FsdGVkX1+ShLJ01NTdtEuf1OrPmL9KEpeU19gujAqlrutqfAvD/AiVmeDFBUj3Hur4tt8WIxz6qL4zl0xL25r+Np3CPYdB1pA1nPSFKI2FROCebkHklckkXM2xM4gU1T26nJeXHtZotQHMvmDSYb4GVu98WDIIpABHZwmazDV00UTJq6M9GRXALrFhhv+qCOf8IlH8LZUQplMD4MXUPATpDQv2ImNyJHzxKeoxcZo9zwKfE54K+5vY0++to65QeTBoKx1S8NxOu75xR+1fIBpnqIltN4dG4kem7+titGEujlkvkcFMFNjgUy/cj63SXo7/QItg3Yq7BmwYc2dIvxqdbvBn9NURpRlrt8u+FaL5orXCmvGXQF0VoaifFiFKXIC8wTksAgo9NqyJd1VCfanKFKoH12/Sjb6Dfja+IbxM+I3LKjconWxxLFdf2xoP1iDBaAKhZxrcDkbFSasf9kfsxMVsB9FZtCVoxb06cwAJSkGXBVp8IZ9vKSC7iB49Qe4VxRrv2ssevOniGPqAgMyUTKQZKjMdoaPGdgE/mj8Bhyoke4/iSox2t/y7YZCZro4Znf1CjxZsAvBNJkIIjLc04NFZ9X1Jmt6DR9heVlkj1pgfFsmfvRx9Q84d9dJ9";
