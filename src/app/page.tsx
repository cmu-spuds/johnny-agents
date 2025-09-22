"use client";

import React, { useState, useEffect } from 'react';
import { Download, Users, BookOpen, Code, ChevronDown, ArrowRight, ArrowDown, Circle, Zap, AlertTriangle, MessageCircle, Settings, Brain, Copy, Check } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const citationText = `@article{shome2025johnny,
  title={Why Johnny Can't Use Agents: Industry Aspirations vs. User Realities with AI Agent Software},
  author={Shome, Pradyumna and Krishnan, Sashreek and Das, Sauvik},
  journal={arXiv preprint arXiv:2509.14528},
  year={2025}
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const barriers = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Misaligned Mental Models",
      description: "Agent capabilities don't match user expectations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Presuming Trust",
      description: "Without demonstrating competence or security",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Inflexible Collaboration",
      description: "Rigid interaction styles that don't adapt",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Communication Overhead",
      description: "Overwhelming users with excessive output",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Metacognitive Gaps",
      description: "Agents lack self-awareness of limitations",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const taxonomy = [
    {
      title: "Orchestration",
      description: "Agents that act on behalf of users to manipulate software interfaces",
      count: "54 agents",
      examples: "Salesforce Agentforce, Copilot",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Creation", 
      description: "Generate structured documents with well-defined formats",
      count: "34 agents",
      examples: "Lovable, Gamma, Beautiful.AI",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Insight",
      description: "Transform unstructured information into digestible insights", 
      count: "98 agents",
      examples: "Perplexity, Spotify AI DJ",
      gradient: "from-orange-600 to-pink-600"
    }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Why Johnny Can't Use Agents
          </a>
          <div className="flex items-center gap-6">
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#methodology" className="hover:text-cyan-400 transition-colors">Methodology</a>
            <a href="#findings" className="hover:text-cyan-400 transition-colors">Findings</a>
            <a href="#recommendations" className="hover:text-cyan-400 transition-colors">Recommendations</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="mb-8 transform transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Why Johnny
              </span>
              <br />
              <span className="text-white">Can't Use</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                Agents
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Industry Aspirations vs. User Realities with AI Agent Software
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://arxiv.org/pdf/2509.14528" target="_blank" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Paper
            </a>
            <a href="https://x.com/PradyumnaShome/status/1969163098507362790" target="_blank" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X Thread
            </a>
            <a href="https://www.linkedin.com/posts/pradyumna-shome_aiagents-generativeai-ux-activity-7374933110213398530-6Cie" target="_blank" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn Post
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">102</div>
              <div className="text-gray-400">AI Agents Analyzed</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-purple-400">31</div>
              <div className="text-gray-400">User Study Participants</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl font-bold text-pink-400">5</div>
              <div className="text-gray-400">Critical Barriers Found</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Authors Section */}
      <section id="team" className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <a href="https://pradyumnashome.com" target="_blank" className="block">
                <div className="w-40 h-40 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 p-1 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/pradyumna-shome.webp" 
                    alt="Pradyumna Shome"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">Pradyumna Shome</h3>
                <p className="text-gray-400 text-sm">Carnegie Mellon University</p>
              </a>
            </div>
            <div className="text-center group">
              <a href="https://www.linkedin.com/in/sashreek-krishnan/" target="_blank" className="block">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 p-1 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/sashreek-krishnan.jpeg" 
                    alt="Sashreek Krishnan"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">Sashreek Krishnan</h3>
                <p className="text-gray-400 text-sm">Carnegie Mellon University</p>
              </a>
            </div>
            <div className="text-center group">
              <a href="https://sauvikdas.com" target="_blank" className="block">
                <div className="w-40 h-40 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full mx-auto mb-4 p-1 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/sauvik-das.png" 
                    alt="Sauvik Das"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">Sauvik Das</h3>
                <p className="text-gray-400 text-sm">Carnegie Mellon University</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Abstract
          </h2>
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur border border-white/10">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              There is growing imprecision about what “AI agents” are, what they can do, and how effectively they can be used by their intended users. We pose two key research questions: <strong className="text-white">(i) How does the tech industry conceive of and market "AI agents"?</strong> <strong className="text-white">(ii) What challenges do end-users face when attempting to use commercial AI agents for their advertised uses?</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We first performed a systematic review of marketed use cases for <strong className="text-cyan-400">102 commercial AI agents</strong>, finding that they fall into three umbrella categories: <strong className="text-purple-400">orchestration, creation, and insight</strong>. Next, we conducted a usability assessment where <strong className="text-pink-400">N = 31 participants</strong> attempted representative tasks for each of these categories on two popular commercial AI agent tools.
            </p>
          </div>
        </div>
      </section>

      {/* Research Methodology Visual */}
      <section id="methodology" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Methodology
          </h2>
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Systematic Review</h3>
                    <p className="text-gray-300">Analyzed 102 AI agents to build taxonomy</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Think-Aloud Sessions</h3>
                    <p className="text-gray-300">31 participants using Operator & Manus</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Semi-Structured Interviews</h3>
                    <p className="text-gray-300">Identified usability barriers and implications</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-center text-gray-400 mb-4">Overview of Research Process</div>
                <div className="space-y-3">
                  {/* RQ1 Flow */}
                  <div className="bg-green-500/20 rounded-lg p-2 text-center text-green-300 text-xs">RQ1: How does industry conceive AI agents?</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-blue-500/20 rounded-lg p-2 text-center text-blue-300 text-xs">Systematic Review (102 agents)</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-orange-500/20 rounded-lg p-2 text-center text-orange-300 text-xs">Taxonomy</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-orange-500/20 rounded-lg p-2 text-center text-orange-300 text-xs">Tasks</div>
                  
                  {/* RQ2 Flow */}
                  <div className="bg-green-500/20 rounded-lg p-2 text-center text-green-300 text-xs mt-4">RQ2: What challenges do users face?</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-blue-500/20 rounded-lg p-2 text-center text-blue-300 text-xs">Think-Aloud Sessions (31 participants)</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-blue-500/20 rounded-lg p-2 text-center text-blue-300 text-xs">Semi-Structured Interviews</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-orange-500/20 rounded-lg p-2 text-center text-orange-300 text-xs">Usability Barriers</div>
                  <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-gray-500" /></div>
                  <div className="bg-orange-500/20 rounded-lg p-2 text-center text-orange-300 text-xs">Design Implications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Findings Section */}
      <section id="findings" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Findings
          </h2>
          
          {/* AI Agent Taxonomy */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">AI Agent Taxonomy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {taxonomy.map((category, index) => (
                <div key={index} className="group hover:scale-105 transition-all duration-500">
                  <div className={`bg-gradient-to-br ${category.gradient} p-1 rounded-3xl`}>
                    <div className="bg-black/80 rounded-3xl p-8 h-full">
                      <div className="text-6xl font-black mb-4 opacity-20">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-cyan-400">
                          {category.count}
                        </div>
                        <div className="text-sm text-gray-400">
                          Examples: {category.examples}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings and SUS Scores Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Key Insights */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Key Findings</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Generally Successful</h4>
                    <p className="text-gray-300 text-sm">Users completed tasks with "Good" to "Excellent" usability ratings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Agent-Specific Strengths</h4>
                    <p className="text-gray-300 text-sm">Manus excelled at slide making (90.6), Operator at holiday planning (88.8)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">×</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Critical Usability Barriers Found</h4>
                    <p className="text-gray-300 text-sm">Despite success, users faced 5 significant usability challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SUS Scores Chart */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-white text-center">System Usability Scale Scores</h3>
              <div className="space-y-12">
                
                {/* Holiday Planning */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-lg font-semibold text-gray-200">Holiday Planning</span>
                    <span className="text-sm text-gray-400">Excellent Range</span>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-orange-400 font-semibold">Operator</div>
                      <div className="flex-1 relative">
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-4 rounded-full" style={{width: '88.8%'}}></div>
                        </div>
                        <span className="absolute right-0 -top-7 text-sm font-bold text-orange-400">88.8</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-cyan-400 font-semibold">Manus</div>
                      <div className="flex-1 relative">
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-4 rounded-full" style={{width: '84.2%'}}></div>
                        </div>
                        <span className="absolute right-0 -top-7 text-sm font-bold text-cyan-400">84.2</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stipend Budgeting */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-lg font-semibold text-gray-200">Stipend Budgeting</span>
                    <span className="text-sm text-gray-400">Good Range</span>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-orange-400 font-semibold">Operator</div>
                      <div className="flex-1 relative">
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-4 rounded-full" style={{width: '69.8%'}}></div>
                        </div>
                        <span className="absolute right-0 -top-7 text-sm font-bold text-orange-400">69.8</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-cyan-400 font-semibold">Manus</div>
                      <div className="flex-1 relative">
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-4 rounded-full" style={{width: '78.0%'}}></div>
                        </div>
                        <span className="absolute right-0 -top-7 text-sm font-bold text-cyan-400">78.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Making */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-lg font-semibold text-gray-200">Slide Making</span>
                    <span className="text-sm text-gray-400">Mixed Results</span>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-orange-400 font-semibold">Operator</div>
                      <div className="flex-1 relative">
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-4 rounded-full" style={{width: '71.2%'}}></div>
                        </div>
                        <span className="absolute right-0 -top-7 text-sm font-bold text-orange-400">71.2</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-cyan-400 font-semibold">Manus</div>
                      <div className="flex-1 relative">
                        <div className="w-full bg-gray-700 rounded-full h-4">
                          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-4 rounded-full" style={{width: '90.6%'}}></div>
                        </div>
                        <span className="absolute right-0 -top-7 text-sm font-bold text-cyan-400">90.6</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Operator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Manus</span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-2">Higher scores indicate better usability (0-100 scale)</p>
              </div>
            </div>
          </div>

          {/* Critical Usability Barriers */}
          <div className="mb-32">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Usability Barriers</h3>
            <div className="space-y-6">
              {barriers.map((barrier, index) => (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-r ${barrier.color} p-1 rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-300`}>
                    <div className="bg-black/90 rounded-2xl p-8 flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${barrier.color} flex items-center justify-center text-white`}>
                          {barrier.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {barrier.title}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {barrier.description}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Implications Section */}
      <section id="recommendations" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Recommendations
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Design implications for building next-generation AI agents
          </p>
          
          <div className="space-y-6">
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-xl">
                  <div className="bg-black/80 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <h4 className="text-white font-semibold">Know Your User</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Collect preferences, skills, and collaboration styles</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-xl">
                  <div className="bg-black/80 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <h4 className="text-white font-semibold">Know Yourself</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Develop metacognitive abilities to recognize limitations</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-1 rounded-xl">
                  <div className="bg-black/80 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <h4 className="text-white font-semibold">Be Adaptable</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Adapt interface based on task type and user preferences</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-1 rounded-xl">
                  <div className="bg-black/80 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <h4 className="text-white font-semibold">Measure Twice, Cut Once</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Support user control during planning and execution phases</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-1 rounded-xl">
                  <div className="bg-black/80 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <h4 className="text-white font-semibold">Show, Don't Tell</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Support multiple input modalities beyond text prompts</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-xl">
                  <div className="bg-black/80 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">6</span>
                      </div>
                      <h4 className="text-white font-semibold">Next Time's the Charm</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Enable precise iteration on outputs with contextual controls</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Details */}
      {/* Removed Study Design Section */}

      {/* Citation Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Citation
          </h2>
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur border border-white/10">
            <div className="flex items-start justify-between gap-4">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed flex-1 overflow-x-auto">
                {citationText}
              </pre>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Carnegie Mellon University. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            This research was funded in part by the National Science Foundation under award #2316768.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
