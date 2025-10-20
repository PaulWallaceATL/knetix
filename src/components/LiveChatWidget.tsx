'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import KnetixLogo from './KnetixLogo';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with actual chat service
    console.log('Chat message:', message);
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
          style={{ zIndex: 1050 }}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#FF8C00] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#00C4B4]" style={{ zIndex: 1050 }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <KnetixLogo showText={false} size="sm" className="text-white" />
              </div>
              <div>
                <div className="font-bold">Chat with Knetix</div>
                <div className="text-xs text-gray-200">We&apos;re online now</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 p-4 bg-gray-50 overflow-y-auto">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] rounded-full flex items-center justify-center flex-shrink-0">
                  <KnetixLogo showText={false} size="sm" className="text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-800">
                    Hi there! 👋 Welcome to Knetix. How can we help you today?
                  </p>
                  <div className="text-xs text-gray-500 mt-1">Just now</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-2">
                <button className="bg-white hover:bg-[#F0F2F5] text-left p-3 rounded-lg text-sm text-gray-700 transition-colors border border-gray-200">
                  📞 Schedule a consultation
                </button>
                <button className="bg-white hover:bg-[#F0F2F5] text-left p-3 rounded-lg text-sm text-gray-700 transition-colors border border-gray-200">
                  💡 Learn about our solutions
                </button>
                <button className="bg-white hover:bg-[#F0F2F5] text-left p-3 rounded-lg text-sm text-gray-700 transition-colors border border-gray-200">
                  📧 Contact sales
                </button>
              </div>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-gradient-to-r from-[#00C4B4] to-[#0A2E50] text-white p-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Typically replies within minutes
            </p>
          </form>
        </div>
      )}
    </>
  );
}

