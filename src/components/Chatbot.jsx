import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { faq } from '../data';

function findAnswer(query) {
  if (!query) return null;
  const q = query.toLowerCase();
  const best = faq.find((f) =>
    f.q.toLowerCase().includes(q) || q.includes(f.q.toLowerCase()) || f.keywords.some((k) => q.includes(k))
  );
  return best ? best.a : "I couldn't find that in my FAQs. Ask about my skills, projects, or experience!";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi, I'm Atharva's assistant. Ask me about projects, skills, or experience!" },
  ]);
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = findAnswer(text);
      setMessages((m) => [...m, { role: 'bot', content: response }]);
      setTyping(false);
    }, 500);
  };

  return (
    <div>
      {open && (
        <div className="fixed bottom-24 right-4 z-40 w-[92vw] max-w-sm rounded-2xl border border-white/10 bg-black/80 backdrop-blur shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="font-semibold text-cyan-200">Ask Atharva</div>
            <button className="p-1.5 rounded hover:bg-white/10" onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-72 overflow-y-auto p-3 space-y-2">
            {messages.map((m, idx) => (
              <div key={idx} className={`max-w-[85%] px-3 py-2 rounded-xl ${m.role === 'bot' ? 'bg-white/10 text-slate-100' : 'bg-cyan-500 text-black ml-auto'}`}>
                {m.content}
              </div>
            ))}
            {typing && (
              <div className="max-w-[70%] px-3 py-2 rounded-xl bg-white/10 text-slate-100 animate-pulse">
                typing...
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="flex items-center gap-2 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
              placeholder="Ask about skills, projects..."
              className="flex-1 rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <button onClick={send} className="p-2 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400" aria-label="Send">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black p-4 shadow-xl"
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
