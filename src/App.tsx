/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Book, 
  Network, 
  BarChart, 
  Brain, 
  Plus, 
  Bell, 
  UserCircle,
  FileText,
  Settings2,
  Rocket,
  Film,
  Presentation,
  HelpCircle,
  Eye,
  Download,
  ExternalLink,
  Share2,
  TrendingUp,
  Bolt,
  Wand2,
  User,
  Mic,
  BookOpen,
  Send,
  Map as MapIcon,
  MapPin,
  Layers,
  FlaskConical,
  History,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Clock,
  Terminal,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type View = 'Standard LMS' | '80/20 Optimized' | 'Socratic' | 'Content Factory';

// --- Shared Components ---

const Sidebar = ({ activeView, onViewChange }: { activeView: View, onViewChange: (view: View) => void }) => {
  const navItems: { name: string, icon: any, view: View }[] = [
    { name: 'Curriculum', icon: Book, view: 'Standard LMS' },
    { name: 'Concept Map', icon: Network, view: 'Socratic' },
    { name: 'Student Analytics', icon: BarChart, view: '80/20 Optimized' },
    { name: 'AI Studio', icon: Brain, view: 'Content Factory' },
  ];

  return (
    <aside className="fixed left-6 top-24 h-[calc(100%-120px)] w-60 flex flex-col py-8 sidebar-glass rounded-3xl hidden lg:flex">
      <div className="px-6 mb-8">
        <h2 className="font-display text-headline-md text-on-surface">Pedagogical Engine</h2>
        <p className="text-body-sm text-on-surface-variant">Active: {activeView === 'Socratic' ? 'Socratic Mode' : 'Direct Instruction'}</p>
      </div>
      
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onViewChange(item.view)}
            className={`px-6 py-3 flex items-center gap-3 transition-all duration-200 hover:bg-surface-variant/30 text-on-surface-variant ${
              activeView === item.view ? 'bg-primary/20 text-primary border-r-4 border-primary inner-glow-purple' : ''
            }`}
          >
            <item.icon size={20} />
            <span className="font-mono text-label-md">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="px-4 mb-8">
        <button 
          onClick={() => alert("Initializing new content source ingestion...")}
          className="w-full bg-secondary-container text-on-secondary-container font-mono text-label-md py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          New Content Source
        </button>
      </div>

      <div className="mt-auto px-6 flex flex-col gap-4 border-t border-outline-variant pt-6">
        <button 
          onClick={() => alert("Opening documentation...")}
          className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 transition-colors"
        >
          <FileText size={18} />
          <span className="font-mono text-label-md">Documentation</span>
        </button>
        <button 
          onClick={() => alert("System Status: All services operational.")}
          className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 transition-colors"
        >
          <Settings2 size={18} />
          <span className="font-mono text-label-md">System Status</span>
        </button>
      </div>
    </aside>
  );
};

const TopBar = ({ activeView, onViewChange }: { activeView: View, onViewChange: (view: View) => void }) => {
  const tabs: View[] = ['Standard LMS', '80/20 Optimized', 'Socratic', 'Content Factory'];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-12 h-16 glass-panel rounded-2xl">
      <div className="flex items-center gap-8">
        <span className="font-display text-headline-md font-bold text-on-surface">CogniShell AI</span>
        <div className="hidden md:flex gap-6 items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onViewChange(tab)}
              className={`text-body-md transition-colors duration-200 pb-2 ${
                activeView === tab 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <button 
            onClick={() => alert("No new notifications")}
            className="text-primary hover:bg-surface-variant/50 p-2 rounded-full transition-all"
          >
            <Bell size={20} />
          </button>
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
        </div>
        <button 
          onClick={() => alert("User profile settings...")}
          className="text-primary hover:bg-surface-variant/50 p-2 rounded-full transition-all"
        >
          <UserCircle size={24} />
        </button>
      </div>
    </nav>
  );
};

// --- Views ---

const ContentFactoryView = () => {
  const [igniting, setIgniting] = useState(false);
  const [ignited, setIgnited] = useState(false);

  const handleIgnite = () => {
    setIgniting(true);
    setTimeout(() => {
      setIgniting(false);
      setIgnited(true);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20 font-mono text-label-sm uppercase tracking-widest">
              Zero-Touch Workflow
            </span>
            <span className="text-on-surface-variant flex items-center gap-1 font-mono text-label-sm">
              <Bolt size={14} className="text-secondary" /> High-Powered
            </span>
          </div>
          <h1 className="font-display text-display-lg text-on-surface">Automated Content Factory</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface-container-high border border-outline-variant rounded-lg p-3 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-surface-container-high bg-primary/20 flex items-center justify-center text-[12px] font-bold">V</div>
              <div className="w-8 h-8 rounded-full border-2 border-surface-container-high bg-secondary/20 flex items-center justify-center text-[12px] font-bold">D</div>
              <div className="w-8 h-8 rounded-full border-2 border-surface-container-high bg-tertiary/20 flex items-center justify-center text-[12px] font-bold">Q</div>
            </div>
            <div>
              <p className="font-mono text-label-sm text-on-surface">{igniting ? 'Igniting...' : '3 Active Agents'}</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Orchestration Active</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 glass-card overflow-hidden flex flex-col">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-primary"><Rocket size={20} /></span>
              <h3 className="font-display text-headline-md">Source Ingestion</h3>
            </div>
            <span className="font-mono text-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">URL / NOTES / PDF</span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-lg relative min-h-[200px]">
              <textarea 
                className="w-full h-full bg-transparent border-none focus:ring-0 p-4 font-sans text-on-surface placeholder:text-on-surface-variant/40 resize-none" 
                placeholder="Paste your course URL, raw research notes, or textbook text here for zero-touch processing..."
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="bg-surface-container-high hover:bg-surface-variant border border-outline-variant p-2 rounded transition-all">
                  <Plus size={18} />
                </button>
                <button className="bg-surface-container-high hover:bg-surface-variant border border-outline-variant p-2 rounded transition-all">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
            <button 
              onClick={handleIgnite}
              disabled={igniting || ignited}
              className={`w-full py-4 ${ignited ? 'bg-secondary/50' : 'bg-secondary'} text-on-secondary font-display text-headline-md rounded-lg flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50`}
            >
              {igniting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <Settings2 size={24} />
                </motion.div>
              ) : ignited ? (
                <CheckCircle2 size={24} />
              ) : (
                <Rocket size={24} />
              )}
              {igniting ? 'Processing Pipeline...' : ignited ? 'Pipeline Ignited' : 'Ignite Multi-Agent Pipeline'}
            </button>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="glass-card p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Settings2 className="text-primary" size={20} />
                <h3 className="font-display text-headline-md">Orchestration</h3>
              </div>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                <Settings2 className="text-primary/40" size={20} />
              </motion.div>
            </div>
            <div className="space-y-4 flex-1">
              <div className="p-4 glass-card border-none flex items-center gap-4 inner-glow-purple">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Film className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-mono text-label-md">Video Script Gen</p>
                    <p className="font-mono text-label-sm text-primary">82%</p>
                  </div>
                  <div className="w-full h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/20 to-primary w-[82%]"></div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded-lg flex items-center gap-4 opacity-70">
                <div className="w-12 h-12 bg-on-surface-variant/10 rounded flex items-center justify-center">
                  <Presentation className="text-on-surface-variant" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-mono text-label-md">Deck Architect</p>
                    <p className="font-mono text-label-sm">Idle</p>
                  </div>
                  <div className="w-full h-1 bg-surface-container-lowest rounded-full"></div>
                </div>
              </div>

              <div className="p-4 bg-surface-container-high border border-outline-variant rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center">
                  <HelpCircle className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-mono text-label-md">Quiz Optimizer</p>
                    <p className="font-mono text-label-sm text-primary">Queued</p>
                  </div>
                  <div className="w-full h-1 bg-surface-container-lowest rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant flex items-center justify-between text-on-surface-variant">
              <span className="font-mono text-label-sm">ESTIMATED COMPLETION: 04:22</span>
              <FileText className="cursor-pointer hover:text-on-surface transition-colors" size={18} />
            </div>
          </div>
        </div>

        <div className="md:col-span-12 glass-panel border border-outline-variant rounded-xl overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="text-secondary" size={20} />
              <h3 className="font-display text-headline-md">Generation Output Preview</h3>
            </div>
            <div className="flex gap-2">
              <button className="bg-surface-container-highest px-4 py-2 rounded font-mono text-label-sm hover:bg-surface-variant transition-all">Latest</button>
              <button className="bg-surface-container-low border border-outline-variant px-4 py-2 rounded font-mono text-label-sm hover:bg-surface-variant transition-all">Archive</button>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PreviewCard 
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
              title="Quantum Physics 101"
              desc="Auto-parsed syllabus converted to 12 modules following Bloom's Taxonomy."
              tag="Study Guide"
              meta="PDF • 24 Pages"
              icon={<Download size={18} />}
            />
            <div className="group bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden hover:border-secondary/50 transition-all cursor-pointer">
              <div className="h-48 relative bg-surface-container-high flex items-center justify-center">
                <div className="text-center p-6 border-2 border-dashed border-outline-variant rounded-lg group-hover:border-secondary/50 transition-all">
                  <Wand2 className="text-secondary mx-auto mb-2" size={32} />
                  <p className="font-mono text-label-sm text-on-surface-variant">Generating Cheat Sheet...</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-mono text-label-md text-on-surface mb-2">Common Pitfalls: React Hooks</h4>
                <p className="text-body-sm text-on-surface-variant line-clamp-2">Aggregated errors and best practices identified from source transcripts.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-wider">In Progress</span>
                  <History className="text-on-surface-variant animate-pulse" size={18} />
                </div>
              </div>
            </div>
            <PreviewCard 
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
              title="The Pareto Strategy"
              desc="24 slides focusing on high-leverage concepts and Pareto distributions."
              tag="Slide Deck"
              meta="Canva Link • Live"
              icon={<ExternalLink size={18} />}
            />
            <div className="group bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden hover:border-secondary/50 transition-all cursor-pointer">
              <div className="h-48 relative bg-surface-container-high overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="h-2 w-1/2 bg-outline-variant rounded"></div>
                    <div className="h-2 w-full bg-outline-variant rounded"></div>
                    <div className="h-2 w-3/4 bg-outline-variant rounded"></div>
                  </div>
                  <div className="flex justify-center">
                    <FileText className="text-outline-variant" size={48} />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-outline-variant rounded"></div>
                    <div className="h-2 w-5/6 bg-outline-variant rounded"></div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-tertiary/80 text-on-tertiary px-2 py-1 rounded font-mono text-[10px] uppercase">Interactive Quiz</div>
              </div>
              <div className="p-4">
                <h4 className="font-mono text-label-md text-on-surface mb-2">Module 1 Checkpoint</h4>
                <p className="text-body-sm text-on-surface-variant line-clamp-2">Adaptive assessment targeting common student misconceptions.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-outline uppercase tracking-wider">SCORM • Ready</span>
                  <Share2 className="text-on-surface-variant group-hover:text-secondary transition-colors" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Complexity" value="High" indicators={3} activeIndicators={2} />
          <StatCard title="User Engagement" value="Med" indicators={3} activeIndicators={1} color="primary" />
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-[2px] mb-2">Scalability</p>
            <div className="flex items-center gap-2 text-secondary">
              <span className="font-display text-headline-lg">EXTREME</span>
              <TrendingUp size={24} />
            </div>
          </div>
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-[2px] mb-2">Tech Stack Status</p>
            <div className="flex flex-wrap gap-2">
              {['D-ID', 'HEYGEN', 'CANVA API', 'CELERY'].map(tag => (
                <span key={tag} className={`px-2 py-1 bg-surface-container-high rounded text-[10px] font-mono ${tag === 'CELERY' ? 'text-secondary' : 'text-on-surface-variant'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PreviewCard = ({ image, title, desc, tag, meta, icon }: any) => (
  <div className="group glass-card overflow-hidden hover:border-primary/50 transition-all cursor-pointer border-none">
    <div className="h-48 relative">
      <img src={image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={title} referrerPolicy="no-referrer" />
      <div className="absolute top-3 left-3 bg-primary/80 text-on-primary px-2 py-1 rounded font-mono text-[10px] uppercase">{tag}</div>
    </div>
    <div className="p-4">
      <h4 className="font-mono text-label-md text-on-surface mb-2">{title}</h4>
      <p className="text-body-sm text-on-surface-variant line-clamp-2">{desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[10px] font-mono text-outline uppercase tracking-wider">{meta}</span>
        <span className="text-on-surface-variant group-hover:text-primary transition-colors">{icon}</span>
      </div>
    </div>
  </div>
);

const StatCard = ({ title, value, indicators, activeIndicators, color = 'primary' }: any) => (
  <div className="glass-card p-6 border-none">
    <p className="text-[10px] text-on-surface-variant uppercase tracking-[2px] mb-2">{title}</p>
    <div className="flex items-center gap-2">
      <span className="font-display text-headline-lg text-on-surface">{value}</span>
      <div className="flex gap-1">
        {Array.from({ length: indicators }).map((_, i) => (
          <span 
            key={i} 
            className={`w-1.5 h-4 rounded-full ${
              i < activeIndicators 
              ? color === 'secondary' ? 'bg-secondary' : 'bg-primary'
              : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

const SocraticOdysseyView = () => {
  const [messages, setMessages] = useState([
    { role: 'agent', content: "Greetings, Traveler. You stand at the edge of the <span class='text-primary italic font-bold'>Semantic Divide</span>. To proceed, we must examine the nature of truth itself.", tags: ['Analogies', 'Metaphor Logic'] },
    { role: 'user', content: "I think it remains a map because it lacks the physical essence of the territory. It's just information." },
    { role: 'agent', content: "Interesting. 'Just information.' But if I can navigate, live, and predict every outcome using only that information, does the 'physical essence' actually matter for our understanding?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMsg = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsSending(true);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'agent',
        content: "A compelling counter-point. But consider this: is the map not a part of the territory once it begins to shape the behavior of those within it?",
        tags: ['Recursion', 'Feedback Loops']
      }]);
      setIsSending(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col lg:flex-row gap-6 h-full"
    >
      <section className="flex-1 flex flex-col h-[calc(100vh-160px)] glass-card overflow-hidden relative">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white/5 backdrop-blur-md">
          <div>
            <span className="font-mono text-label-sm text-primary uppercase tracking-widest">Active Chapter</span>
            <h1 className="font-display text-headline-md mt-1 text-on-surface">The Socratic Odyssey: Foundations</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-surface" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="Mentor" referrerPolicy="no-referrer" />
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[10px] font-bold">YOU</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 max-w-2xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border border-outline-variant ${msg.role === 'user' ? 'bg-primary text-on-primary' : 'bg-white/10 text-primary'}`}>
                {msg.role === 'user' ? <User size={20} /> : <Wand2 size={20} />}
              </div>
              <div className="space-y-3">
                <div className={`p-5 rounded-xl border-none ${msg.role === 'user' ? 'bg-primary/10 rounded-tr-none border-primary/30 text-right backdrop-blur-sm' : 'glass-card rounded-tl-none bg-white/5 text-left'}`}>
                  <p className="text-body-md leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.content }} />
                </div>
                {msg.tags && (
                  <div className="flex gap-2">
                    {msg.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 text-on-surface-variant rounded-full text-label-sm font-mono border border-outline-variant">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isSending && (
            <div className="flex gap-4 max-w-2xl">
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center border border-outline-variant text-primary">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Wand2 size={20} />
                </motion.div>
              </div>
              <div className="glass-card p-5 rounded-tl-none border-none bg-white/5">
                <div className="flex gap-1">
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-surface-container-high/80 backdrop-blur-md border-t border-outline-variant">
          <div className="relative">
            <textarea 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 pr-16 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary resize-none placeholder:text-on-surface-variant/50" 
              placeholder="Formulate your derivation..." 
              rows={2}
            />
            <button 
              onClick={handleSend}
              disabled={isSending || !inputValue.trim()}
              className="absolute right-4 bottom-4 w-10 h-10 bg-secondary text-on-secondary rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:grayscale"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors">
                <Mic size={18} />
                <span className="text-label-sm font-mono">Voice Synthesis</span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors">
                <BookOpen size={18} />
                <span className="text-label-sm font-mono">Narrative Crisis</span>
              </button>
            </div>
            <span className="text-label-sm font-mono text-outline">GPT-4o Socratic Agent active</span>
          </div>
        </div>
      </section>

      <aside className="w-full lg:w-96 space-y-6">
        <div className="bg-gradient-to-br from-error/10 to-white/5 glass-card p-6 relative overflow-hidden border-none">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/10 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-label-md text-error flex items-center gap-2">
              <Bolt size={18} /> Assessment: Boss Fight
            </span>
            <span className="font-mono text-label-sm text-on-surface-variant">42% Prepared</span>
          </div>
          <h3 className="font-display text-headline-md mb-2">The Gatekeeper of Logic</h3>
          <p className="text-body-sm text-on-surface-variant mb-6">Current Narrative Crisis: The crumbling infrastructure of the Cogito Fortress requires a perfect derivation of First Principles to stabilize.</p>
          <div className="space-y-4">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "42%" }}
                className="h-full bg-gradient-to-r from-primary to-error"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-outline-variant">
                <p className="text-[10px] text-outline font-mono uppercase">Strength</p>
                <p className="text-body-md font-bold text-on-surface">Inductive Reasoning</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-outline-variant">
                <p className="text-[10px] text-outline font-mono uppercase">Weakness</p>
                <p className="text-body-md font-bold text-error">Fallacy Detection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card overflow-hidden flex flex-col border-none">
          <div className="p-4 border-b border-outline-variant flex items-center justify-between bg-white/5 backdrop-blur-md">
            <h3 className="font-mono text-label-md">Territory Map</h3>
            <MapIcon className="text-primary" size={18} />
          </div>
          <div className="aspect-square relative bg-slate-950 overflow-hidden">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <img className="w-full h-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" alt="Map" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <MapNode top="25%" left="25%" title="Axioms of Reality" status="explored" />
                <MapNode top="50%" left="50%" title="The Semantic Divide" status="current" />
                <MapNode top="75%" left="75%" title="Universal Synthesis" status="locked" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line x1="25" y1="25" x2="50" y2="50" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="50" y1="50" x2="75" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/5">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-primary" size={16} />
              <span className="text-body-sm font-bold text-on-surface">The Whispering Isles</span>
            </div>
            <p className="text-[12px] text-on-surface-variant">3/12 Concepts Extracted. Next waypoint: <span className="text-primary">First Principles</span>.</p>
          </div>
        </div>

        <div className="glass-card p-4 border-none">
          <h3 className="font-mono text-label-sm text-outline uppercase tracking-wider mb-4">Underlying Odyssey Stack</h3>
          <div className="space-y-3">
            {[
              { label: 'Socratic Agent', val: 'GPT-4o' },
              { label: 'Narrator Voice', val: 'ElevenLabs' },
              { label: 'Mnemonic Songs', val: 'Suno' }
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-body-sm font-mono">{item.label}</span>
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/20 font-mono">
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </motion.div>
  );
};

const MapNode = ({ top, left, title, status }: any) => (
  <div className="absolute group/node cursor-pointer" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
    <div className={`w-4 h-4 rounded-full transition-all ${
      status === 'current' ? 'bg-secondary shadow-[0_0_20px_rgba(210,187,255,1)] animate-pulse border-4 border-surface' :
      status === 'explored' ? 'bg-secondary' : 'bg-outline opacity-40'
    }`} />
    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface-container p-2 rounded border border-secondary text-[10px] whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity z-10">
      {title}
    </div>
  </div>
);

const ParetoEngineView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col lg:flex-row gap-6 h-full"
    >
      <section className="flex-1 flex flex-col relative overflow-hidden space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 font-mono text-label-sm rounded uppercase">80/20 Optimized</span>
            <span className="text-on-surface-variant font-mono text-label-sm">THE PARETO ENGINE</span>
          </div>
          <h1 className="font-display text-headline-lg text-on-surface">Mastery: Fundamental Principles</h1>
          <p className="text-on-surface-variant font-body-md max-w-2xl">Focusing on high-leverage concepts. The system has filtered fluff to prioritize the 20% of core principles that explain 80% of applications.</p>
        </div>

        <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-4">
          <div className="col-span-12 lg:col-span-8 row-span-4 glass-card relative overflow-hidden flex flex-col items-center justify-center p-8 group border-none">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 rounded-full border-4 border-primary/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <Bolt className="text-primary" size={48} fill="currentColor" />
              </div>
              <h2 className="font-display text-headline-md text-on-surface mb-2">First Principles Thinking</h2>
              <p className="text-body-sm text-on-surface-variant max-w-md mx-auto">The foundational cognitive framework for deconstructing complex problems into basic elements.</p>
              <div className="mt-8 flex gap-4 justify-center">
                <span className="bg-white/5 px-4 py-2 border border-outline-variant rounded-full text-xs font-mono text-primary">FORCE MULTIPLIER: 5.2x</span>
                <span className="bg-white/5 px-4 py-2 border border-outline-variant rounded-full text-xs font-mono text-secondary">RETENTION: 92%</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 row-span-2 glass-card p-6 flex flex-col justify-between hover:bg-white/5 transition-colors border-none">
            <div>
              <Network className="text-primary mb-2" size={20} />
              <h3 className="font-mono text-label-md text-on-surface">Mental Models</h3>
              <p className="text-body-sm text-on-surface-variant mt-1">Abstract representations of external reality.</p>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} className="h-full bg-gradient-to-r from-primary/20 to-primary" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 row-span-2 glass-card p-6 flex flex-col justify-between hover:bg-white/5 transition-colors border-none">
            <div>
              <Terminal className="text-primary mb-2" size={20} />
              <h3 className="font-mono text-label-md text-on-surface">Recursive Feedback</h3>
              <p className="text-body-sm text-on-surface-variant mt-1">Systems that use their outputs as inputs.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Active Mastering</span>
            </div>
          </div>

          <div className="col-span-4 lg:col-span-3 row-span-2 border border-outline-variant bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-on-surface">24</span>
            <span className="text-[10px] font-mono text-outline uppercase tracking-wider">Sub-dependencies</span>
          </div>

          <div className="col-span-4 lg:col-span-3 row-span-2 border border-outline-variant bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-secondary">Medium</span>
            <span className="text-[10px] font-mono text-outline uppercase tracking-wider">Acquisition Difficulty</span>
          </div>

          <div className="col-span-4 lg:col-span-6 row-span-2 border border-secondary/30 bg-secondary/5 rounded-xl p-6 flex items-center gap-6">
            <img 
              className="w-20 h-20 rounded object-cover border border-outline-variant" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm7T9dNx1Mp53zuYFqtWUqNhy2ExbQmRgWh83HCWpDYRevpK-deGahXWNn5t7hP5S55_CKMuFb2Id48cBoaFwPS5Two6zSkIJDPBZoIPJjM8kvEbgxf-dg5p46i4ONBYN-1XyUNI5LvMP7AvVxAVtV3ICsvVprezghsC0_OFW0BaExAAlMgKh_PlpbQpl8PB1CB_8SExPVIpgNKI6_7_l4wr_IMkPo0uIPoNBHi_aTlxvwUye4WkKqKdDLg0lXpDd2ov_tt5S2lcc" 
              alt="Strategy" 
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="font-mono text-label-md text-secondary uppercase tracking-widest">Strategic Core Priority</h4>
              <p className="text-body-sm text-on-surface-variant mt-1">Claude 3.5 Sonnet identified this node as the 20% anchor for the entire syllabus.</p>
            </div>
          </div>
        </div>
      </section>

      <aside className="w-full lg:w-80 glass-card p-6 flex flex-col h-full overflow-y-auto border-none">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-headline-md text-on-surface">Active Recall</h2>
          <HelpCircle className="text-on-surface-variant" size={20} />
        </div>
        <div className="mb-8 p-4 glass-card border-none bg-white/5">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-label-sm text-outline uppercase">Daily Spacing</span>
            <span className="font-mono text-label-sm text-secondary uppercase">12 Cards Due</span>
          </div>
          <div className="flex gap-1 h-1.5">
            <div className="flex-1 bg-secondary rounded-full"></div>
            <div className="flex-1 bg-secondary rounded-full"></div>
            <div className="flex-1 bg-surface-variant rounded-full"></div>
            <div className="flex-1 bg-surface-variant rounded-full"></div>
          </div>
        </div>
        <div className="space-y-4">
          <ActiveCard 
            type="Concept Card" 
            q="How does Pareto's Principle apply to information density in LMS systems?"
            icon={<Layers size={14} />}
          />
          <ActiveCard 
            type="Application" 
            q="Define 'Semantic Shell' in the context of modular UI architectures."
            icon={<FlaskConical size={14} />}
          />
          <div className="p-5 border border-outline-variant bg-surface-container rounded-xl opacity-60">
            <div className="flex items-center gap-2 mb-3 text-on-tertiary-container">
              <History size={14} />
              <span className="font-mono text-label-sm uppercase">Mastered 2d Ago</span>
            </div>
            <p className="text-body-sm text-on-surface-variant">The relationship between GPT-4o token parsing and sequential LMS modules.</p>
          </div>
        </div>
        <button 
          onClick={() => alert("Deep session starting now. Focus mode enabled.")}
          className="mt-8 w-full border border-secondary text-secondary py-3 rounded-lg font-mono text-label-md flex items-center justify-center gap-2 hover:bg-secondary/10 transition-colors"
        >
          <Bolt size={16} fill="currentColor" />
          Start Deep Session
        </button>
      </aside>
    </motion.div>
  );
};

const ActiveCard = ({ type, q, icon }: any) => (
  <div className="p-5 glass-card group cursor-pointer hover:border-primary transition-all bg-white/5 border-none">
    <div className="flex items-center gap-2 mb-3 text-primary">
      {icon}
      <span className="font-mono text-label-sm uppercase">{type}</span>
    </div>
    <p className="text-body-md text-on-surface mb-4">{q}</p>
    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="text-xs font-mono text-on-surface-variant">Click to reveal answer</span>
      <ArrowRight className="text-primary" size={14} />
    </div>
  </div>
);

const StandardLMSView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-container-max mx-auto"
    >
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="font-mono text-label-sm text-secondary uppercase tracking-widest">Module 01: Core Architecture</span>
            <h1 className="font-display text-headline-lg text-on-surface mt-1">Pedagogical Guardian Workflow</h1>
          </div>
          <div className="text-right">
            <span className="font-mono text-label-md text-on-surface-variant uppercase">Module Progress: 65%</span>
          </div>
        </div>
        <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            className="h-full bg-gradient-to-r from-surface-container-highest to-secondary"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <div className="p-8 glass-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-outline-variant rounded flex items-center justify-center font-display text-headline-md text-primary">01</div>
              <div className="space-y-4">
                <h2 className="font-display text-headline-md text-on-surface">Content Parsing & Sequencing</h2>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  The Pedagogical Guardian begins by analyzing raw input—syllabi, textbook chapters, or technical manuals. Using OpenAI GPT-4o, the system parses content into sequential modules structured around Bloom's Taxonomy.
                </p>
                <div className="bg-white/5 p-4 border border-outline-variant rounded-lg">
                  <h4 className="font-mono text-label-md text-primary mb-2 uppercase tracking-widest">Step-by-Step Procedure:</h4>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li className="flex gap-3"><span className="text-primary font-bold">1.</span> Ingest raw text or PDF assets.</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">2.</span> Extract semantic keywords and logical hierarchies.</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">3.</span> Assign Bloom levels (Remember, Understand, Apply, etc.).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 glass-card relative overflow-hidden opacity-90">
            <div className="absolute top-0 left-0 w-1 h-full bg-outline-variant"></div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-outline-variant rounded flex items-center justify-center font-display text-headline-md text-on-surface-variant">02</div>
              <div className="space-y-4">
                <h2 className="font-display text-headline-md text-on-surface">Structured Output Generation</h2>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Once sequenced, the engine generates pedagogical content featuring clear definitions, step-by-step procedures, and illustrative examples to ground theoretical concepts in practical reality.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop" className="w-full h-40 object-cover grayscale opacity-50 hover:grayscale-0 transition-all rounded border border-outline-variant" alt="Tech" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" className="w-full h-40 object-cover grayscale opacity-50 hover:grayscale-0 transition-all rounded border border-outline-variant" alt="Network" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="p-6 glass-card">
            <h3 className="font-mono text-label-md text-on-surface mb-6 uppercase tracking-wider">Engine Tech Stack</h3>
            <div className="space-y-4">
              <TechStackItem label="Parsing Engine" val="GPT-4o" isSpecial />
              <TechStackItem label="Orchestration" val="LangChain" />
              <TechStackItem label="Database" val="PostgreSQL" />
              <TechStackItem label="Frontend Framework" val="React" />
            </div>
          </div>

          <div className="p-6 glass-card border-none bg-primary/10 inner-glow-purple border-t-2 border-t-primary/50">
            <h3 className="font-mono text-label-md text-primary mb-4 uppercase tracking-widest">Knowledge Check</h3>
            <div className="space-y-4">
              <p className="text-body-sm text-on-surface">The 'Standard' solution complexity is rated as:</p>
              <Quiz />
            </div>
          </div>

          <div className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="text-primary" size={20} />
              <h3 className="font-mono text-label-md text-on-surface uppercase tracking-widest">Module Summary</h3>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-relaxed italic">
              "The Pedagogical Guardian ensures academic rigor by maintaining a linear flow that prevents conceptual gaps. Reliability is achieved through strict adherence to standardized syllabus structures."
            </p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

const TechStackItem = ({ label, val, isSpecial }: any) => (
  <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 last:border-0 last:pb-0">
    <span className="text-on-surface-variant text-body-sm">{label}</span>
    <span className={`font-mono text-label-sm ${isSpecial ? 'text-secondary bg-secondary-container/20 px-2 py-0.5 rounded border border-secondary/20' : 'text-primary'}`}>
      {val}
    </span>
  </div>
);

const Quiz = () => {
  const [selected, setSelected] = useState<string | null>('Low / Structured');
  const options = ['Extreme', 'Low / Structured', 'Variable'];

  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <QuizOption 
          key={opt} 
          label={opt} 
          selected={selected === opt} 
          onClick={() => setSelected(opt)}
        />
      ))}
    </div>
  );
};

const QuizOption = ({ label, selected, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full p-3 text-left border rounded-lg text-body-sm transition-all flex justify-between items-center group ${
    selected ? 'bg-primary/20 border-primary' : 'bg-white/5 border-outline-variant hover:border-primary'
  }`}>
    <div className="flex items-center gap-3">
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? 'bg-primary border-primary' : 'border-outline-variant group-hover:border-primary'}`}>
        {selected && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <span>{label}</span>
    </div>
    {selected && <CheckCircle2 size={16} className="text-primary" />}
  </button>
);

// --- Main App ---

export default function App() {
  const [activeView, setActiveView] = useState<View>('Content Factory');

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans app-background">
      <TopBar activeView={activeView} onViewChange={setActiveView} />
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="lg:ml-72 pt-28 px-4 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto h-full">
          <AnimatePresence mode="wait">
            {activeView === 'Content Factory' && <ContentFactoryView key="factory" />}
            {activeView === 'Socratic' && <SocraticOdysseyView key="socratic" />}
            {activeView === '80/20 Optimized' && <ParetoEngineView key="pareto" />}
            {activeView === 'Standard LMS' && <StandardLMSView key="lms" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

