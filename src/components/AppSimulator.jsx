import { useState } from 'react';
import { CalendarIcon, BellIcon, ChartIcon, RobotIcon } from './Icons';

// TEMPO App Theme (from React Native app)
const theme = {
  colors: {
    primary: '#8B7D6B',
    primaryDark: '#6B5D4F',
    primaryLight: '#E8E3DD',
    text: '#1F2937',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    background: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',
    backgroundTertiary: '#F3F4F6',
    border: '#E5E7EB',
    success: '#059669',
    successLight: '#D1FAE5',
    warning: '#D97706',
    warningLight: '#FEF3C7',
    error: '#DC2626',
    errorLight: '#FEE2E2',
    info: '#0284C7',
    infoLight: '#E0F2FE',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
};

// Shared Card Component
const Card = ({ children, className = '', style = {} }) => (
  <div
    className={className}
    style={{
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.lg,
      boxShadow: theme.shadows.md,
      ...style,
    }}
  >
    {children}
  </div>
);

// Shared Button Component
const Button = ({ children, variant = 'primary', icon: Icon, onClick, className = '' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          color: '#FFFFFF',
          border: 'none',
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.backgroundSecondary,
          color: theme.colors.text,
          border: `1px solid ${theme.colors.border}`,
        };
      default:
        return {};
    }
  };

  return (
    <button
      onClick={onClick}
      className={`button-simulator ${className}`}
      style={{
        ...getStyles(),
        padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
        borderRadius: theme.borderRadius.md,
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
        transition: 'all 0.2s ease',
        ...(!Icon && { justifyContent: 'center' }),
      }}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
};

// Badge Component
const Badge = ({ children, variant = 'info', className = '' }) => {
  const getColors = () => {
    switch (variant) {
      case 'success':
        return {
          backgroundColor: theme.colors.successLight,
          color: theme.colors.success,
        };
      case 'warning':
        return {
          backgroundColor: theme.colors.warningLight,
          color: theme.colors.warning,
        };
      case 'error':
        return {
          backgroundColor: theme.colors.errorLight,
          color: theme.colors.error,
        };
      case 'info':
      default:
        return {
          backgroundColor: theme.colors.infoLight,
          color: theme.colors.info,
        };
    }
  };

  return (
    <span
      className={className}
      style={{
        ...getColors(),
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.borderRadius.full,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
};

// Manager Dashboard View
const ManagerDashboard = () => {
  const stats = [
    { label: 'Employés', value: '12', icon: '👥' },
    { label: 'Quarts cette semaine', value: '48', icon: '📅' },
    { label: 'Quarts non assignés', value: '3', icon: '⚠️', alert: true },
    { label: 'Demandes en attente', value: '5', icon: '📋', alert: true },
  ];

  const quickActions = [
    { label: 'Créer un quart', icon: '➕', color: theme.colors.success },
    { label: 'Générer planning IA', icon: '🤖', color: theme.colors.primary },
    { label: 'Gérer employés', icon: '👥', color: theme.colors.info },
    { label: 'Planning hebdo', icon: '📅', color: theme.colors.warning },
  ];

  return (
    <div style={{ padding: theme.spacing['2xl'], backgroundColor: theme.colors.backgroundSecondary, height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: theme.spacing['3xl'] }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: theme.colors.text, marginBottom: theme.spacing.xs }}>
          Tableau de bord
        </h1>
        <p style={{ fontSize: 14, color: theme.colors.textSecondary }}>
          Lundi 16 décembre 2024
        </p>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: theme.spacing.lg,
          marginBottom: theme.spacing['3xl'],
        }}
      >
        {stats.map((stat, index) => (
          <Card key={index} style={{ position: 'relative' }}>
            {stat.alert && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: '100%',
                  backgroundColor: theme.colors.warning,
                  borderTopLeftRadius: theme.borderRadius.lg,
                  borderBottomLeftRadius: theme.borderRadius.lg,
                }}
              />
            )}
            <div style={{ fontSize: 24, marginBottom: theme.spacing.sm }}>{stat.icon}</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: theme.colors.primary, marginBottom: theme.spacing.xs }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 12, color: theme.colors.textSecondary }}>{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: theme.spacing['3xl'] }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: theme.colors.text, marginBottom: theme.spacing.lg }}>
          Actions rapides
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: theme.spacing.md }}>
          {quickActions.map((action, index) => (
            <Card
              key={index}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              className="action-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                <div
                  style={{
                    fontSize: 24,
                    width: 48,
                    height: 48,
                    borderRadius: theme.borderRadius.md,
                    backgroundColor: `${action.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {action.icon}
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: theme.colors.text }}>
                  {action.label}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Tickets */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: theme.colors.text, marginBottom: theme.spacing.lg }}>
          Demandes récentes
        </h2>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.md }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: theme.colors.text, marginBottom: theme.spacing.xs }}>
                Marie Dubois
              </div>
              <div style={{ fontSize: 12, color: theme.colors.textSecondary }}>
                [CONGÉ] Demande de congé du 20-22 décembre
              </div>
            </div>
            <Badge variant="info">En attente</Badge>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: theme.colors.text, marginBottom: theme.spacing.xs }}>
                Jean Martin
              </div>
              <div style={{ fontSize: 12, color: theme.colors.textSecondary }}>
                [ÉCHANGE] Échange de quart le 18 décembre
              </div>
            </div>
            <Badge variant="info">En attente</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Employee Dashboard View
const EmployeeDashboard = () => {
  return (
    <div style={{ padding: theme.spacing['2xl'], backgroundColor: theme.colors.backgroundSecondary, height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: theme.spacing['3xl'] }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: theme.colors.text, marginBottom: theme.spacing.xs }}>
          Bonjour, Sophie
        </h1>
        <p style={{ fontSize: 14, color: theme.colors.textSecondary }}>
          Voici votre résumé
        </p>
      </div>

      {/* Next Shift Card */}
      <Card
        style={{
          marginBottom: theme.spacing['2xl'],
          borderLeft: `4px solid ${theme.colors.primary}`,
          backgroundColor: theme.colors.primaryLight,
        }}
      >
        <div style={{ fontSize: 12, color: theme.colors.textSecondary, marginBottom: theme.spacing.sm }}>
          PROCHAIN QUART
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, color: theme.colors.text, marginBottom: theme.spacing.xs }}>
          Mardi 17 décembre
        </div>
        <div style={{ fontSize: 14, color: theme.colors.textSecondary }}>
          9:00 AM - 5:00 PM • Caissier
        </div>
      </Card>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: theme.spacing.lg, marginBottom: theme.spacing['3xl'] }}>
        <Card>
          <div style={{ fontSize: 32, fontWeight: 700, color: theme.colors.primary, marginBottom: theme.spacing.xs }}>
            5
          </div>
          <div style={{ fontSize: 12, color: theme.colors.textSecondary }}>Quarts cette semaine</div>
        </Card>
        <Card>
          <div style={{ fontSize: 32, fontWeight: 700, color: theme.colors.primary, marginBottom: theme.spacing.xs }}>
            38h
          </div>
          <div style={{ fontSize: 12, color: theme.colors.textSecondary }}>Heures cette semaine</div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: theme.colors.text, marginBottom: theme.spacing.lg }}>
          Actions rapides
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          <Button variant="primary" icon={CalendarIcon}>
            Voir mon calendrier
          </Button>
          <Button variant="secondary" icon={BellIcon}>
            Mes demandes & tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

// Weekly Planning View
const WeeklyPlanning = () => {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const hours = Array.from({ length: 13 }, (_, i) => i + 8); // 8h - 20h

  const shifts = [
    { day: 0, start: 9, duration: 4, employee: 'Marie D.', position: 'Caissier' },
    { day: 0, start: 14, duration: 5, employee: 'Jean M.', position: 'Vendeur' },
    { day: 1, start: 9, duration: 8, employee: 'Sophie L.', position: 'Manager' },
    { day: 2, start: 10, duration: 4, employee: 'Pierre R.', position: 'Caissier' },
    { day: 3, start: 9, duration: 6, employee: 'Marie D.', position: 'Vendeur' },
  ];

  return (
    <div style={{ padding: theme.spacing['2xl'], backgroundColor: theme.colors.backgroundSecondary, height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: theme.spacing['2xl'] }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: theme.colors.text }}>
            Planning hebdomadaire
          </h1>
          <Button variant="primary" icon={RobotIcon}>
            Générer avec IA
          </Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.lg }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: 20,
              cursor: 'pointer',
              color: theme.colors.text,
            }}
          >
            ←
          </button>
          <span style={{ fontSize: 16, fontWeight: 600, color: theme.colors.text }}>
            16 - 22 décembre 2024
          </span>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: 20,
              cursor: 'pointer',
              color: theme.colors.text,
            }}
          >
            →
          </button>
          <Button variant="secondary">Aujourd'hui</Button>
        </div>
      </div>

      {/* Day Selector */}
      <div style={{ display: 'flex', gap: theme.spacing.sm, marginBottom: theme.spacing['2xl'], overflowX: 'auto' }}>
        {days.map((day, index) => (
          <button
            key={index}
            style={{
              flex: '1',
              minWidth: 80,
              padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
              borderRadius: theme.borderRadius.md,
              border: `1px solid ${theme.colors.border}`,
              backgroundColor: index === 0 ? theme.colors.primary : theme.colors.background,
              color: index === 0 ? '#FFFFFF' : theme.colors.text,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease',
            }}
          >
            {day}
            <Badge
              variant={index === 0 ? 'success' : 'info'}
              className="absolute -top-2 -right-2"
              style={{ fontSize: 10, padding: '2px 6px' }}
            >
              {index < 5 ? index + 2 : 0}
            </Badge>
          </button>
        ))}
      </div>

      {/* Timeline Grid */}
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {/* Hour Labels */}
          <div style={{ width: 60, borderRight: `1px solid ${theme.colors.border}` }}>
            <div style={{ height: 40, borderBottom: `1px solid ${theme.colors.border}` }} />
            {hours.map((hour) => (
              <div
                key={hour}
                style={{
                  height: 60,
                  borderBottom: `1px solid ${theme.colors.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  color: theme.colors.textSecondary,
                }}
              >
                {hour}:00
              </div>
            ))}
          </div>

          {/* Timeline Content */}
          <div style={{ flex: 1, position: 'relative' }}>
            {/* Grid Lines */}
            <div style={{ height: 40, borderBottom: `1px solid ${theme.colors.border}`, padding: theme.spacing.md }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: theme.colors.text }}>Lundi</span>
            </div>
            {hours.map((hour, index) => (
              <div
                key={hour}
                style={{
                  height: 60,
                  borderBottom: `1px solid ${theme.colors.border}`,
                  backgroundColor: index % 2 === 0 ? theme.colors.background : theme.colors.backgroundSecondary,
                }}
              />
            ))}

            {/* Shift Blocks */}
            {shifts
              .filter((shift) => shift.day === 0)
              .map((shift, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    top: 40 + (shift.start - 8) * 60,
                    left: theme.spacing.sm,
                    right: theme.spacing.sm,
                    height: shift.duration * 60 - theme.spacing.sm,
                    backgroundColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.md,
                    padding: theme.spacing.sm,
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 600,
                    boxShadow: theme.shadows.md,
                    cursor: 'move',
                  }}
                >
                  <div>{shift.employee}</div>
                  <div style={{ fontSize: 10, opacity: 0.9 }}>{shift.position}</div>
                  <div style={{ fontSize: 10, opacity: 0.8 }}>
                    {shift.start}:00 - {shift.start + shift.duration}:00
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

// Main App Simulator Component
const AppSimulator = () => {
  const [currentView, setCurrentView] = useState('manager-dashboard');

  const views = [
    { id: 'manager-dashboard', label: 'Tableau de bord Manager', component: ManagerDashboard },
    { id: 'employee-dashboard', label: 'Tableau de bord Employé', component: EmployeeDashboard },
    { id: 'weekly-planning', label: 'Planning hebdomadaire', component: WeeklyPlanning },
  ];

  const CurrentViewComponent = views.find((v) => v.id === currentView)?.component;

  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.shadows.lg,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: `1px solid ${theme.colors.border}`,
          backgroundColor: theme.colors.background,
          padding: `${theme.spacing.md}px ${theme.spacing.lg}px 0`,
          gap: theme.spacing.sm,
        }}
      >
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => setCurrentView(view.id)}
            style={{
              padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: currentView === view.id ? `3px solid ${theme.colors.primary}` : '3px solid transparent',
              color: currentView === view.id ? theme.colors.primary : theme.colors.textSecondary,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {view.label}
          </button>
        ))}
      </div>

      {/* View Content */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {CurrentViewComponent && <CurrentViewComponent />}
      </div>

      <style>{`
        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.lg};
        }
        .button-simulator:hover {
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }
        .button-simulator:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default AppSimulator;
