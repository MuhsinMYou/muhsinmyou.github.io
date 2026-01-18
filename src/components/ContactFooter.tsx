import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram, Github, Linkedin, Heart, X, Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    // 1. Google Form Configuration (For Sheet)
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLScbfqDBIcaDKNBXVnjYjI1n9dNAufKiZosJup9bnlFMM3SzjQ/formResponse";
    const googleFormData = new URLSearchParams();
    googleFormData.append("entry.2134740503", formData.name);
    googleFormData.append("entry.675256188", formData.email);
    googleFormData.append("entry.1860776810", formData.message);

    // 2. FormSubmit Configuration (For Email)
    const formSubmitUrl = "https://formsubmit.co/ajax/muhsinpgr1@gmail.com";
    const formSubmitBody = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _subject: `Portfolio Message from ${formData.name}`,
      _replyto: formData.email,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      await Promise.all([
        // Request 1: FormSubmit (Email)
        fetch(formSubmitUrl, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formSubmitBody)
        }),
        // Request 2: Google Forms (Sheet)
        fetch(GOOGLE_FORM_ACTION_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: googleFormData
        })
      ]);

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsContactOpen(false);
        setFormStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('idle');
    }
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* Dynamic Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            x: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="flex flex-col items-center text-center space-y-12 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-stone-300 font-medium">Available for new projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tight"
          >
            Ready to build <br /> something <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">extraordinary?</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-orange-500/20 blur-[20px] z-0"
              />
            </span>
          </motion.h2>

          <motion.button
            onClick={() => setIsContactOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xl rounded-full overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:shadow-[0_0_80px_rgba(249,115,22,0.6)] transition-all duration-300 pointer-events-auto cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3 font-sans">
              Start a Conversation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-bold text-white mb-2 tracking-tighter">MUHSIN</h4>
            <p className="text-stone-400 text-sm">Creative Technologist | AI Enthusiast</p>
          </div>

          <div className="flex items-center gap-4">
            <FooterSocialLink href="https://github.com/MuhsinMYou" icon={Github} label="GitHub" />
            <FooterSocialLink href="https://linkedin.com/in/muhsinponpara" icon={Linkedin} label="LinkedIn" />
            <FooterSocialLink href="https://instagram.com/muhhs.in" icon={Instagram} label="Instagram" />
            <FooterSocialLink href="mailto:muhsinpgr1@gmail.com" icon={Mail} label="Email" />
          </div>

          <div className="text-stone-500 text-sm flex flex-col md:items-end gap-1 text-center md:text-right">
            <span>&copy; {new Date().getFullYear()} Muhsin MYou.</span>
            <span>All rights reserved.</span>
          </div>

        </div>
      </div>

      {/* Contact Modal Portal */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {ReactDOM.createPortal(
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsContactOpen(false)}
                  className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />

                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
                >
                  {/* Decorative Gradients */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-20"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="relative z-10 min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {formStatus === 'success' ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                            <Send className="w-10 h-10" />
                          </div>
                          <h3 className="text-3xl font-sans font-bold text-white mb-4">Message Sent!</h3>
                          <p className="text-slate-400 font-sans">Thanks for reaching out. I'll get back to you soon.</p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <h3 className="text-3xl font-sans font-bold text-white mb-2">Let's start a conversation</h3>
                          <p className="text-slate-400 mb-8 font-sans">Tell me about your project or just say hello.</p>

                          <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-xs text-secondary font-sans tracking-widest uppercase ml-1">Full Name</label>
                                <div className="relative group">
                                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                                  <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white font-sans placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label className="text-xs text-secondary font-sans tracking-widest uppercase ml-1">Email Address</label>
                                <div className="relative group">
                                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                                  <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white font-sans placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs text-secondary font-sans tracking-widest uppercase ml-1">Your Message</label>
                              <div className="relative group">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                                <textarea
                                  rows={4}
                                  value={formData.message}
                                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                  placeholder="Tell me about your project..."
                                  required
                                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white font-sans placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                                />
                              </div>
                            </div>

                            <button
                              type="submit"
                              disabled={formStatus === 'submitting'}
                              className="w-full bg-gradient-to-r from-orange-700 to-orange-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {formStatus === 'submitting' ? (
                                <span className="animate-pulse">Sending...</span>
                              ) : (
                                <>
                                  <Send className="w-4 h-4" />
                                  Send Message
                                </>
                              )}
                            </button>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>,
              document.body
            )}
          </>
        )}
      </AnimatePresence>
    </footer>
  );
};

const FooterSocialLink = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5 text-stone-400 group-hover:text-orange-400 transition-colors" />
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
      {label}
    </span>
  </a>
)

export default ContactFooter;