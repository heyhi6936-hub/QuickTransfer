import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Trash2, Globe, UserCheck, ArrowRight, KeyRound } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Security & Privacy Architecture — QuickTransfer',
  description: 'Learn how QuickTransfer protects your files with HTTPS in transit, ephemeral cloud storage, automatic expiration, and no account requirements.',
  alternates: {
    canonical: 'https://quicktransfer.site/security',
  },
};

export default function SecurityPage() {
  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-100 dark:border-red-500/20 shadow-lg shadow-red-500/10">
            <Shield className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            How QuickTransfer Protects Your Files
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            QuickTransfer is designed around transparency and minimal data retention. 
            We provide a <strong className="text-red-500">fast, temporary file transfer</strong> utility where security, short retention windows, and privacy are built into every interaction.
          </p>
        </div>

        {/* Detailed Content Sections */}
        <div className="grid grid-cols-1 gap-12">
          
          <section className="group p-8 md:p-12 bg-gray-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-red-500/20 shrink-0">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">Encrypted in Transit (HTTPS / TLS)</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Every file upload, code lookup, and download is conducted over modern HTTPS connections utilizing TLS 1.2+ encryption. 
                    This safeguards your data across local networks, public Wi-Fi hotspots, and internet routing hops against interception or tampering.
                  </p>
                  <p>
                    Transfers are authenticated directly with trusted Firebase infrastructure, ensuring that data is encrypted while travelling between your device and the temporary storage repository.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="group p-8 md:p-12 bg-gray-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform shadow-lg shadow-pink-500/20 shrink-0">
                <Trash2 className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">Ephemeral Storage & Automated Expiration</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Unlike permanent cloud storage lockers, QuickTransfer is strictly ephemeral. Transfers are configured with an aggressive 
                    Time-To-Live (TTL) of either 5 or 10 minutes from creation.
                  </p>
                  <p>
                    Once the expiration threshold is reached, lookups are immediately blocked and the temporary record is purged from active storage. 
                    We do not maintain permanent archival copies or index shared files.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-8 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-700/50">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/10">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">No Accounts or Sign-Ups</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We do not collect names, passwords, email addresses, or phone numbers. Without account databases to store credentials, 
                users are protected from credential stuffing, password breaches, and marketing spam.
              </p>
            </section>

            <section className="p-8 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-700/50">
              <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-green-500/10">
                <KeyRound className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Cryptographic Code Generation</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Transfer keys are generated using cryptographically secure pseudorandom number generators via the browser Web Crypto API 
                (`crypto.getRandomValues`), ensuring unpredictability and collision resistance.
              </p>
            </section>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-red-50 dark:bg-red-500/5 p-8 md:p-12 rounded-[3.5rem] border border-red-100 dark:border-red-500/10">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 text-center">Frequently Asked Security Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">How is my data encrypted?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                All communications and transfers are encrypted in transit via standard HTTPS (TLS 1.2+). Files are stored temporarily in Google Firebase cloud infrastructure, which enforces encryption at rest.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Who can access my files?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Only someone who possesses the active 6-digit transfer code during the validity period. There is no public catalog or searchable directory of files.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">How long are files kept?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Files are kept for the selected duration (5 or 10 minutes). Once expired, transfers cannot be retrieved and are scheduled for purge.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">What data is stored about transfers?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Only the temporary transfer record (file name, size, type, expiration timestamp, and content). We do not correlate your transfers with user profiles or accounts.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center pt-8 border-t border-gray-100 dark:border-slate-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experience simple, privacy-focused file sharing without the hassle of accounts.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20 group"
          >
            Start Transfer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
