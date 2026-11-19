import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Lock, Trash2, Eye } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Privacy Policy — QuickTransfer',
  description: 'Understand QuickTransfer privacy practices: no account registration, ephemeral file storage, automated deletion, and HTTPS transit security.',
  alternates: {
    canonical: 'https://quicktransfer.site/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700/50">
        <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-8 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">Effective date: November 2026</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. No Account & Zero Credential Collection</h2>
            <p>
              QuickTransfer operates without account registration. We do not require, collect, or store your name, email address, password, phone number, or social media credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Ephemeral File Storage & Retention</h2>
            <p>
              Uploaded files are stored temporarily on Firebase cloud infrastructure to allow your recipient to retrieve them. Each transfer is created with an explicit expiration window of 5 or 10 minutes.
            </p>
            <p>
              Once a transfer has expired, it is rendered inaccessible and purged from active storage. We do not archive, catalog, or mine the contents of your shared files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Transmission & Transit Security</h2>
            <p>
              All interactions with QuickTransfer occur over secure HTTPS connections utilizing modern TLS protocols. This ensures your file contents and transfer codes are encrypted while traveling across the internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Cookies and Local Storage</h2>
            <p>
              QuickTransfer uses client-side local storage exclusively to save your chosen language preference, theme setting, and recent transfer codes for your own browser convenience. We do not use cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Contact Information</h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to report abuse, you can contact us via our <Link href="/contact" className="text-red-500 hover:underline">Contact Page</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
