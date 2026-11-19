import React from 'react';
import Link from 'next/link';
import { Clock, Trash2, Shield, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Temporary File Sharing — Self-Expiring Transfers Online',
  description: 'Share files temporarily with automatic expiration in 5 or 10 minutes. Safe, private file transfers up to 100MB with zero account requirements.',
  alternates: {
    canonical: 'https://quicktransfer.site/temporary-file-sharing',
  },
  openGraph: {
    title: 'Temporary File Sharing — Auto-Expiring Files',
    description: 'Send files with an automatic 5 or 10 minute expiration timer. Expired files are invalidated and purged from active storage.',
    url: 'https://quicktransfer.site/temporary-file-sharing',
  },
};

export default function TemporaryFileSharingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does temporary file sharing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you upload a file on QuickTransfer, you select an expiration window of 5 or 10 minutes. A unique 6-digit code is generated. After the timer runs out, the transfer code is invalidated and the record is purged from active storage.",
        },
      },
      {
        "@type": "Question",
        "name": "Can an expired file be downloaded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Once a transfer expires, any lookup attempt returns an expired error, preventing further access.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the maximum file size for temporary transfers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can send files up to 100MB per transfer for free without creating an account.",
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
            <Clock className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Temporary File Sharing with Auto-Expiration
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            Keep your digital footprint minimal. QuickTransfer allows you to share files up to 100MB that automatically expire in 5 or 10 minutes.
          </p>
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20"
            >
              Start Temporary Transfer <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </header>

        {/* Why Temporary Sharing Matters */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <Trash2 className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Lingering Data</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Unlike cloud storage folders that sit forgotten for years, temporary transfers disappear automatically.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <Shield className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">HTTPS Protected</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Files are encrypted during transit via modern TLS protocols, protecting uploads from local network sniffing.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <Lock className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Key-Protected Access</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transfers are protected by a random 6-digit key. No public directory or searchable list of uploads exists.
            </p>
          </div>
        </section>

        {/* Expiration Details */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 space-y-6">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center">
            How Expiration is Enforced
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              When a sender initiates an upload, QuickTransfer attaches a strict timestamp limit (Time-To-Live) of 5 or 10 minutes.
            </p>
            <p>
              Both the sender and recipient are presented with an active live countdown. The moment the expiration threshold passes:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>The 6-digit transfer code is immediately rejected for any future downloads.</li>
              <li>The temporary file record is removed from active cloud database storage.</li>
              <li>Neither the sender nor recipient can retrieve the data again without re-uploading.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

