import { Link } from 'react-router-dom';
import { ArrowRight, Users, Music, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const logoSrc = '/logo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-navy-100/50 dark:border-navy-800/50 bg-white/80 dark:bg-navy-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logoSrc} alt="Amazima School" className="h-8 w-auto" />
            <span className="font-bold text-navy-900 dark:text-white">Amazima Chapel Hub</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 dark:bg-cream-700/20 text-navy-700 dark:text-cream-300 text-sm font-medium mb-8">
          <img src={logoSrc} alt="TAS" className="h-4 w-auto" />
          The Amazima School
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white tracking-tight leading-tight mb-6">
          Your Chapel,{' '}
          <span className="text-gold-500">Connected</span>
        </h1>
        <p className="text-lg text-navy-500 dark:text-navy-400 max-w-2xl mb-10 leading-relaxed">
          A modern digital platform for Amazima School's chapel community.
          Track attendance, manage groups, share songs, and grow together in faith — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/register">
            <Button variant="gold" size="lg" className="gap-2">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">Sign In to Your Account</Button>
          </Link>
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 w-full max-w-3xl">
          {[
            { icon: Users, label: 'Groups' },
            { icon: Calendar, label: 'Attendance' },
            { icon: Music, label: 'Songs' },
            { icon: Heart, label: 'Prayer' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800"
            >
              <Icon className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium text-navy-700 dark:text-navy-300">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
