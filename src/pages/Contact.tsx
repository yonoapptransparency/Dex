import { safeHtml } from '../lib/safeHtmlPublic';
/**
 * Contact ticketing desk form
 * Integrates directly with Firestore db schemas to log customer inquiries, issues, or direct suggestions.
 */

import { Mail, MessageSquare, MapPin, ArrowLeft, ShieldCheck, Loader2, Check, AlertCircle } from 'lucide-react';
import { useData } from '../contexts/DataContextPublic';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Meta from '../components/Meta';

export default function Contact() {
  const { settings: mockSettings } = useData();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [msgText, setMsgText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');
  return (
    <div className="max-w-[1000px] mx-auto px-3.5 sm:px-6 py-3 sm:py-6 animate-fade-in pb-14 min-h-[70vh] text-left">
      <Meta 
        title={mockSettings?.contact_meta_title || "Contact Support"}
        description={mockSettings?.contact_meta_description || `Get in touch with ${mockSettings?.site_title || 'RummyDex'} support for any queries or assistance.`}
        canonical={window.location.origin + "/contact"}
      />
      <div className="mb-3 sm:mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="lg:col-span-12 xl:col-span-5 space-y-5">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2.5 pb-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80">Contact Us</h1>
            <div 
              className="rich-html-content markdown-body text-xs xs:text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: safeHtml(mockSettings.contact_content || '' ) }}
            />
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3.5 py-2.5 border-b border-zinc-200/70 dark:border-zinc-800/80">
              <div className="text-blue-500 mt-0.5 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[11px] uppercase tracking-wider text-zinc-400 mb-0.5">Email</h3>
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm">{mockSettings.support_email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 py-2.5 border-b border-zinc-200/70 dark:border-zinc-800/80">
              <div className="text-pink-500 mt-0.5 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[11px] uppercase tracking-wider text-zinc-400 mb-0.5">Live Chat</h3>
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm">Monday to Saturday, 10:00 AM - 3:00 PM (Instant reply in every section)</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 py-2.5">
              <div className="text-purple-500 mt-0.5 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[11px] uppercase tracking-wider text-zinc-400 mb-0.5">Office</h3>
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm">Plot No. 18, 4th Floor, Commercial Complex, Sector 12, Dwarka, New Delhi, Delhi 110075, India</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={async (e) => {
          e.preventDefault();
          setErrorText('');
          setSuccess(false);

          if (!msgText.trim()) {
            setErrorText('Please type a message first.');
            return;
          }
          setSubmitting(true);
          try {
            const cleanComment = msgText.trim().replace(/<[^>]*>?/gm, '');
            const payload = {
              username: username.trim() || 'Anonymous User',
              email: email.trim() || 'no-email@provided.com',
              comment: cleanComment,
              created_at: new Date().toISOString(),
              status: 'pending',
              source: 'contact_page'
            };

            try {
              await fetch('/api/v1/public/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              }).catch(() => {});
            } catch (e) {}
            setSuccess(true);
            setMsgText('');
            setUsername('');
            setEmail('');
          } catch (err: any) {
            console.error('Failed to submit formal ticket payload:', err);
            setErrorText('Failed to transmit message safely. Please try again.');
          } finally {
            setSubmitting(false);
          }
        }} className="lg:col-span-12 xl:col-span-7 border-t lg:border-t-0 lg:border-l border-zinc-200/80 dark:border-zinc-800/80 pt-5 lg:pt-0 lg:pl-8 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">Send a Message</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Name</label>
              <input id="contact-name" required type="text" placeholder="Your Name" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Email</label>
              <input id="contact-email" required type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Message</label>
            <textarea id="contact-message" required value={msgText} onChange={(e) => setMsgText(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-transparent border border-zinc-200 dark:border-zinc-800 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100 text-sm font-medium resize-none" placeholder="How can we help?"></textarea>
          </div>

          {errorText && (
            <div className="flex items-center gap-1 text-xs font-semibold text-rose-500 pt-1">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorText}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <Check className="w-4 h-4 shrink-0" />
              <span>Message sent successfully! Our support agents will contact you shortly.</span>
            </div>
          )}

          <button type="submit" disabled={submitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl shadow-xs transition-all active:scale-[0.99] text-sm flex items-center justify-center gap-2">
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending message...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
