import React from 'react';
import Link from 'next/link';
import { UserX, ShieldCheck, Clock, Zap, ArrowRight, CheckCircle2, FileUp } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Send Files Without an Account — Free & Instant Transfer',
  description: 'Learn how to send files online without creating an account or signing up. Free, secure transfers up to 100MB with a simple 6-digit code.',
  alternates: {
    canonical: 'https://quicktransfer.site/send-files-without-account',
  },
  openGraph: {
    title: 'Send Files Online Without an Account',
    description: 'No login, no password, no email needed. Share files up to 100MB using a temporary 6-digit code.',
    url: 'https://quicktransfer.site/send-files-without-account',
  },
};

export default function SendFilesWithoutAccountPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why send files without creating an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sending files without an account eliminates password fatigue, avoids unsolicited email newsletters, reduces credential breach risks, and saves time when doing quick peer-to-peer transfers.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the maximum file size without sign-up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QuickTransfer provides free transfers up to 100MB per batch without any sign-up or registration required.",
        },
      },
      {
        "@type": "Question",
        "name": "How does the recipient retrieve the file?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recipient simply visits QuickTransfer.site, enters the 6-digit transfer code generated upon upload, and clicks download. No recipient account is required either.",
        },
      },
    ],
  };

  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-100 dark:border-red-500/20 shadow-lg shadow-red-500/10">
            <UserX className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            How to Send Files Online Without an Account
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            Skip registration forms, password creation, and inbox confirmation emails. QuickTransfer allows you to share files up to 100MB immediately using a simple 6-digit code.
          </p>
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20"
            >
              Start Free Transfer Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </header>

        {/* 3 Step Guide */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 text-center">
            3 Steps to Send Files Without Logging In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-black mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Select Your Files</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Choose any documents, images, or archives up to 100MB in total size directly from your browser.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-black mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Get 6-Digit Code</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our system instantly produces an unpredictable 6-digit transfer code. No email or link copying required.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-black mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Recipient Retrieves</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The recipient inputs the code on QuickTransfer.site on any mobile or desktop browser to download the file.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits vs Traditional Cloud */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center">
            Account-Free Sharing vs. Permanent Cloud Storage
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <thead className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700">Feature</th>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700 text-red-500">QuickTransfer</th>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700">Traditional Cloud Drives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800 text-sm text-gray-600 dark:text-gray-300">
                <tr>
                  <td className="p-4 font-semibold">Account Requirement</td>
                  <td className="p-4 text-green-600 dark:text-green-400 font-bold">None (100% Account-Free)</td>
                  <td className="p-4">Mandatory Account & Password</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Recipient Sign-up</td>
                  <td className="p-4 text-green-600 dark:text-green-400 font-bold">No Account Needed</td>
                  <td className="p-4">Often prompts login / app install</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Data Retention</td>
                  <td className="p-4 font-semibold">Expires in 5–10 minutes</td>
                  <td className="p-4">Stored indefinitely until manual deletion</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Transfer Key</td>
                  <td className="p-4 font-bold text-red-500">Simple 6-digit numeric code</td>
                  <td className="p-4">Long, easily leaked URLs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-red-50 dark:bg-red-500/5 p-8 md:p-12 rounded-[2.5rem] border border-red-100 dark:border-red-500/10 space-y-6">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Are my files kept private without an account?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. Because we do not require account registration, your files are never linked to personal profiles, email addresses, or phone numbers. All transfers are encrypted in transit via HTTPS and automatically expire after 5 or 10 minutes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Can I transfer multiple files at once?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. You can select multiple files up to the 100MB total limit. All files are bundled under a single 6-digit transfer code for your recipient to download together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
