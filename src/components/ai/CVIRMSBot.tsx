import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { BotCanvas3D } from '../3d/BotCanvas3D';
import { botRules, defaultBotGreeting, suggestedBotChips } from './botRules';
import type { Page } from '../../types';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  suggestedAction?: {
    label: string;
    actionType: 'navigate' | 'external';
    target: string;
  };
}

interface CVIRMSBotProps {
  onNavigate?: (page: Page) => void;
}

export const CVIRMSBot: React.FC<CVIRMSBotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: defaultBotGreeting,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Evaluate bot rule matches
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedRule = botRules.find((rule) =>
        rule.keywords.some((kw) => lower.includes(kw))
      );

      let replyText =
        "Thank you for contacting the CVIRMS Helpdesk. You can reach our 24/7 technical team at 9187535990 or explore our official resources section.";
      let action = undefined;

      if (matchedRule) {
        replyText = matchedRule.response;
        action = matchedRule.suggestedAction;
      }

      const botReply: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        suggestedAction: action,
      };

      setMessages((prev) => [...prev, botReply]);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open CVIRMS AI Virtual Assistant"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 20px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--primary)',
            color: 'var(--text-on-primary)',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img
              src="/cvirms-logo.png"
              alt="CVIRMS AI Logo"
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                objectFit: 'contain',
                backgroundColor: '#FFFFFF',
                padding: '2px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: -2,
                right: -2,
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'var(--status-general)',
                boxShadow: '0 0 6px var(--status-general)',
              }}
            />
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Ask CVIRMS Bot</span>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div
          className="chatbot-window"
          style={{
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '520px',
            maxHeight: 'calc(100vh - 100px)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInUp 0.25s ease-out',
          }}
        >
          {/* Header with AI Logo & 3D Avatar */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'var(--bg-surface-alt)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--primary)',
                  boxShadow: '0 2px 8px rgba(14, 165, 233, 0.25)',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/cvirms-logo.jpg"
                  alt="CVIRMS AI Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <BotCanvas3D />
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span>CVIRMS Bot</span>
                  <Sparkles size={14} color="var(--primary)" />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--status-general)', fontWeight: 600 }}>
                  ● Public Assistant Active
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Assistant"
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  style={{
                    alignSelf: isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    backgroundColor: isBot ? 'var(--bg-surface-alt)' : 'var(--primary)',
                    color: isBot ? 'var(--text-primary)' : 'var(--text-on-primary)',
                    padding: '10px 14px',
                    borderRadius: isBot ? '14px 14px 14px 2px' : '14px 14px 2px 14px',
                    fontSize: '0.875rem',
                    lineHeight: 1.45,
                    border: isBot ? '1px solid var(--border)' : 'none',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div>{msg.text}</div>

                  {msg.suggestedAction && (
                    <div style={{ marginTop: 8 }}>
                      {msg.suggestedAction.actionType === 'external' ? (
                        <a
                          href={msg.suggestedAction.target}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            backgroundColor: 'var(--primary)',
                            color: 'var(--text-on-primary)',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-btn)',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            marginTop: 4,
                          }}
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            if (onNavigate && msg.suggestedAction) {
                              onNavigate(msg.suggestedAction.target as Page);
                              setIsOpen(false);
                            }
                          }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            backgroundColor: 'var(--accent)',
                            color: 'var(--text-on-accent)',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-btn)',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            marginTop: 4,
                            cursor: 'pointer',
                          }}
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div
            style={{
              padding: '8px 12px',
              backgroundColor: 'var(--bg-surface-alt)',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: 6,
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {suggestedBotChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSend(chip)}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div
            style={{
              padding: '12px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: 8,
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            <input
              type="text"
              placeholder="Ask about guidelines, app, or portal..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 'var(--radius-input)',
                border: '1px solid var(--border-strong)',
                backgroundColor: 'var(--bg-surface-alt)',
                color: 'var(--text-primary)',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSend()}
              aria-label="Send Message"
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-btn)',
                backgroundColor: 'var(--primary)',
                color: 'var(--text-on-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
