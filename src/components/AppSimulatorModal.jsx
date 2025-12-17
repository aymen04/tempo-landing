import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, ChartIcon, RobotIcon, BellIcon, TargetIcon, PhoneIcon } from './Icons';

// EXACT TEMPO App Styles from React Native
const DAYS_SHORT = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const DAYS_FULL = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const HOURS = Array.from({ length: 14 }, (_, i) => i + 7); // 7h-20h

// Icon Components for Dashboard
const PlusIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const UsersIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ClipboardIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

// ========== DASHBOARD MANAGER ==========
const ManagerDashboard = () => {
  return (
    <div style={{ padding: 24, backgroundColor: '#f9fafb', height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 24, fontWeight: '700', color: '#1f2937', marginBottom: 4 }}>
          Bienvenue, Manager
        </div>
        <div style={{ fontSize: 14, color: '#6b7280' }}>
          Vue d'ensemble complète de votre commerce • Lundi 16 décembre 2024
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
        <div style={dashStyles.statCard}>
          <div style={dashStyles.statLabel}>Employés</div>
          <div style={dashStyles.statValue}>12</div>
        </div>

        <div style={dashStyles.statCard}>
          <div style={dashStyles.statLabel}>Shifts semaine</div>
          <div style={dashStyles.statValue}>48</div>
        </div>

        <div style={{ ...dashStyles.statCard, borderLeft: '4px solid #d97706' }}>
          <div style={dashStyles.statLabel}>Non assignés</div>
          <div style={{ ...dashStyles.statValue, color: '#d97706' }}>3</div>
        </div>

        <div style={{ ...dashStyles.statCard, borderLeft: '4px solid #0284c7' }}>
          <div style={dashStyles.statLabel}>Demandes</div>
          <div style={{ ...dashStyles.statValue, color: '#0284c7' }}>5</div>
        </div>
      </div>

      {/* Actions rapides */}
      <div style={dashStyles.card}>
        <div style={dashStyles.cardTitle}>
          <BellIcon className="w-5 h-5" style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
          Actions rapides
        </div>

        <div style={dashStyles.quickActionItem}>
          <div style={{ ...dashStyles.summaryIcon, backgroundColor: '#d1fae5' }}>
            <div style={dashStyles.summaryIconText}>
              <PlusIcon size={20} />
            </div>
          </div>
          <div style={dashStyles.summaryContent}>
            <div style={dashStyles.quickActionTitle}>Créer un shift</div>
            <div style={dashStyles.quickActionDescription}>Ajouter un nouveau shift au planning</div>
          </div>
          <div style={dashStyles.quickActionArrow}>→</div>
        </div>

        <div style={dashStyles.quickActionItem}>
          <div style={{ ...dashStyles.summaryIcon, backgroundColor: '#E8E3DD' }}>
            <div style={dashStyles.summaryIconText}>
              <RobotIcon className="w-5 h-5" />
            </div>
          </div>
          <div style={dashStyles.summaryContent}>
            <div style={dashStyles.quickActionTitle}>Générer planning IA</div>
            <div style={dashStyles.quickActionDescription}>Créer automatiquement le planning</div>
          </div>
          <div style={dashStyles.quickActionArrow}>→</div>
        </div>

        <div style={dashStyles.quickActionItem}>
          <div style={{ ...dashStyles.summaryIcon, backgroundColor: '#e0f2fe' }}>
            <div style={dashStyles.summaryIconText}>
              <UsersIcon size={20} />
            </div>
          </div>
          <div style={dashStyles.summaryContent}>
            <div style={dashStyles.quickActionTitle}>Gérer employés</div>
            <div style={dashStyles.quickActionDescription}>Voir et modifier les employés</div>
          </div>
          <div style={dashStyles.quickActionArrow}>→</div>
        </div>

        <div style={dashStyles.quickActionItem}>
          <div style={{ ...dashStyles.summaryIcon, backgroundColor: '#fef3c7' }}>
            <div style={dashStyles.summaryIconText}>
              <CalendarIcon className="w-5 h-5" />
            </div>
          </div>
          <div style={dashStyles.summaryContent}>
            <div style={dashStyles.quickActionTitle}>Planning hebdo</div>
            <div style={dashStyles.quickActionDescription}>Voir le planning de la semaine</div>
          </div>
          <div style={dashStyles.quickActionArrow}>→</div>
        </div>

        <div style={dashStyles.quickActionItem}>
          <div style={{ ...dashStyles.summaryIcon, backgroundColor: '#E8E3DD' }}>
            <div style={dashStyles.summaryIconText}>
              <RobotIcon className="w-5 h-5" />
            </div>
          </div>
          <div style={dashStyles.summaryContent}>
            <div style={dashStyles.quickActionTitle}>IA Planning</div>
            <div style={dashStyles.quickActionDescription}>Générer le planning avec l'IA</div>
          </div>
          <div style={dashStyles.quickActionArrow}>→</div>
        </div>
      </div>

      {/* Demandes récentes */}
      <div style={{ ...dashStyles.card, marginTop: 16 }}>
        <div style={dashStyles.cardTitle}>
          <ClipboardIcon size={20} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
          Demandes récentes
        </div>

        <div style={dashStyles.ticketItem}>
          <div style={{ flex: 1 }}>
            <div style={dashStyles.ticketName}>Marie Dubois</div>
            <div style={dashStyles.ticketReason}>[CONGÉ] Demande de congé du 20-22 décembre</div>
          </div>
          <div style={{ ...dashStyles.badge, backgroundColor: '#e0f2fe', color: '#0284c7' }}>
            En attente
          </div>
        </div>

        <div style={dashStyles.ticketItem}>
          <div style={{ flex: 1 }}>
            <div style={dashStyles.ticketName}>Jean Martin</div>
            <div style={dashStyles.ticketReason}>[ÉCHANGE] Échange de quart le 18 décembre</div>
          </div>
          <div style={{ ...dashStyles.badge, backgroundColor: '#e0f2fe', color: '#0284c7' }}>
            En attente
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== DASHBOARD EMPLOYEE ==========
const EmployeeDashboard = () => {
  return (
    <div style={{ padding: 24, backgroundColor: '#f9fafb', height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 24, fontWeight: '700', color: '#1f2937', marginBottom: 4 }}>
          Bonjour, Sophie
        </div>
        <div style={{ fontSize: 14, color: '#6b7280' }}>
          Voici votre résumé
        </div>
      </div>

      {/* Prochain shift */}
      <div style={{ ...dashStyles.card, borderLeft: '4px solid #8B7D6B', backgroundColor: '#E8E3DD' }}>
        <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 8, fontWeight: '600' }}>
          PROCHAIN SHIFT
        </div>
        <div style={{ fontSize: 18, fontWeight: '600', color: '#1f2937', marginBottom: 4 }}>
          Mardi 17 décembre
        </div>
        <div style={{ fontSize: 14, color: '#6b7280' }}>
          9:00 - 17:00 • Caissier
        </div>
      </div>

      {/* Stats cette semaine */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 16, marginBottom: 24 }}>
        <div style={dashStyles.statCard}>
          <div style={dashStyles.statValue}>5</div>
          <div style={dashStyles.statLabel}>Shifts cette semaine</div>
        </div>

        <div style={dashStyles.statCard}>
          <div style={dashStyles.statValue}>38h</div>
          <div style={dashStyles.statLabel}>Heures cette semaine</div>
        </div>
      </div>

      {/* Actions rapides */}
      <div style={dashStyles.card}>
        <div style={dashStyles.cardTitle}>Actions rapides</div>

        <button style={dashStyles.actionButton}>
          <div style={dashStyles.actionButtonText}>
            <CalendarIcon className="w-5 h-5" style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
            Voir mon calendrier
          </div>
        </button>

        <button style={{ ...dashStyles.actionButton, marginTop: 12 }}>
          <div style={dashStyles.actionButtonText}>
            <ClipboardIcon size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
            Demandes & Tickets
          </div>
        </button>
      </div>
    </div>
  );
};

// ========== WEEKLY PLANNING ==========
const WeeklyPlanningSimulator = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [shifts, setShifts] = useState([
    { id: 1, day: 0, start: 9, end: 13, name: 'Marie D.' },
    { id: 2, day: 0, start: 14, end: 18, name: 'Jean M.' },
  ]);

  const employees = [
    { id: 1, name: 'Marie D.', avail: '8:00 - 17:00' },
    { id: 2, name: 'Jean M.', avail: '9:00 - 18:00' },
    { id: 3, name: 'Sophie L.', avail: '10:00 - 19:00' },
    { id: 4, name: 'Pierre R.', avail: '8:00 - 16:00' },
  ];

  const assignedEmployees = shifts.filter(s => s.day === selectedDay).map(s => s.name);
  const availableEmployees = employees.filter(emp => !assignedEmployees.includes(emp.name));

  const handleEmployeeClick = (emp) => {
    setSelectedEmployee(selectedEmployee?.id === emp.id ? null : emp);
  };

  const handleHourClick = (hour) => {
    if (!selectedEmployee) {
      alert('Sélectionnez d\'abord un employé ci-dessus');
      return;
    }

    const endHour = hour + 4;
    const newShift = {
      id: Date.now(),
      day: selectedDay,
      start: hour,
      end: endHour,
      name: selectedEmployee.name,
    };

    setShifts([...shifts, newShift]);
    setSelectedEmployee(null);
  };

  const deleteShift = (shiftId) => {
    setShifts(shifts.filter(s => s.id !== shiftId));
  };

  const shiftsToday = shifts.filter(s => s.day === selectedDay);

  const isOccupied = (hour) => {
    return shiftsToday.some(s => hour >= s.start && hour < s.end);
  };

  const getShiftAtHour = (hour) => {
    return shiftsToday.find(s => s.start === hour);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#fff', padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: 18, fontWeight: '600', color: '#0f172a', marginBottom: 12 }}>
          Planning Hebdomadaire
        </div>

        {/* Week Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
          <button style={planStyles.navButton}>←</button>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: '600', color: '#0f172a' }}>
              16 - 22 décembre
            </div>
            <button style={planStyles.todayButton}>Aujourd'hui</button>
          </div>
          <button style={planStyles.navButton}>→</button>
        </div>
      </div>

      {/* Employés disponibles */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div style={{ fontSize: 11, fontWeight: '600', color: '#0f172a', paddingLeft: 16, marginBottom: 8 }}>
          Employés disponibles ({availableEmployees.length})
        </div>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingLeft: 16, paddingRight: 16 }}>
          {availableEmployees.length === 0 ? (
            <div style={{ fontSize: 11, color: '#94a3b8', fontStyle: 'italic', padding: '4px 0' }}>
              Aucun employé disponible
            </div>
          ) : (
            availableEmployees.map(emp => (
              <div
                key={emp.id}
                onClick={() => handleEmployeeClick(emp)}
                style={{
                  ...planStyles.employeeChip,
                  ...(selectedEmployee?.id === emp.id ? planStyles.employeeChipSelected : {}),
                  cursor: 'pointer',
                }}
              >
                <div style={selectedEmployee?.id === emp.id ? planStyles.employeeChipNameSelected : planStyles.employeeChipName}>
                  {emp.name}
                </div>
                <div style={selectedEmployee?.id === emp.id ? planStyles.employeeChipTimeSelected : planStyles.employeeChipTime}>
                  {emp.avail}
                </div>
              </div>
            ))
          )}
        </div>
        {selectedEmployee && (
          <div style={planStyles.selectedInfo}>
            <div style={planStyles.selectedInfoText}>
              ✓ {selectedEmployee.name} sélectionné - Cliquez sur un créneau horaire
            </div>
          </div>
        )}
      </div>

      {/* Sélecteur de jours */}
      <div style={planStyles.daySelector}>
        {DAYS_SHORT.map((day, index) => {
          const shiftsCount = shifts.filter(s => s.day === index).length;
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedDay(index);
                setSelectedEmployee(null);
              }}
              style={{
                ...(selectedDay === index ? planStyles.dayButtonActive : planStyles.dayButton),
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <div style={selectedDay === index ? planStyles.dayLetterActive : planStyles.dayLetter}>
                {day}
              </div>
              <div style={selectedDay === index ? planStyles.dayNumberActive : planStyles.dayNumber}>
                {16 + index}
              </div>
              {shiftsCount > 0 && (
                <div style={selectedDay === index ? planStyles.badgeActive : planStyles.badge}>
                  <div style={selectedDay === index ? planStyles.badgeTextActive : planStyles.badgeText}>
                    {shiftsCount}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Calendrier horaire */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#fff' }}>
          <div style={{ fontSize: 16, fontWeight: '600', color: '#0f172a' }}>
            {DAYS_FULL[selectedDay]} {16 + selectedDay}
          </div>
          <div style={{ fontSize: 13, color: '#64748b' }}>
            {shiftsToday.length} shift{shiftsToday.length > 1 ? 's' : ''}
          </div>
        </div>

        <div style={{ padding: '0 16px' }}>
          {HOURS.map(hour => {
            const occupied = isOccupied(hour);
            const shift = getShiftAtHour(hour);

            return (
              <div key={hour} style={planStyles.hourRow}>
                <div style={planStyles.hourLabel}>
                  <div style={planStyles.hourText}>{hour}h</div>
                </div>

                <div
                  onClick={() => !occupied && handleHourClick(hour)}
                  style={{
                    ...planStyles.hourSlot,
                    ...(occupied ? planStyles.hourSlotOccupied : {}),
                    ...(selectedEmployee && !occupied ? planStyles.hourSlotDroppable : {}),
                    cursor: !occupied ? 'pointer' : 'default',
                  }}
                >
                  {shift && (
                    <div style={planStyles.shiftBlock}>
                      <div style={planStyles.shiftContent}>
                        <div style={planStyles.shiftEmployeeName}>
                          {shift.name}
                        </div>
                        <div style={planStyles.shiftTime}>
                          {shift.start}h - {shift.end}h
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteShift(shift.id);
                        }}
                        style={planStyles.shiftDelete}
                      >
                        <div style={planStyles.shiftDeleteText}>✕</div>
                      </button>
                    </div>
                  )}

                  {!occupied && selectedEmployee && (
                    <div style={planStyles.hourSlotText}>+ Assigner</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ========== EMPLOYEES LIST ==========
const EmployeesList = () => {
  const [expandedEmployee, setExpandedEmployee] = useState(null);

  const employees = [
    { id: 1, name: 'Marie Dubois', email: 'marie.d@tempo.com', phone: '06 12 34 56 78', upcomingShifts: 3, weekHours: 35, weekShifts: 5, availability: ['Lun 8h-17h', 'Mar 8h-17h', 'Mer 8h-17h', 'Jeu 8h-17h', 'Ven 8h-14h'] },
    { id: 2, name: 'Jean Martin', email: 'jean.m@tempo.com', phone: '06 98 76 54 32', upcomingShifts: 2, weekHours: 28, weekShifts: 4, availability: ['Lun 9h-18h', 'Mar 9h-18h', 'Jeu 9h-18h', 'Ven 9h-18h'] },
    { id: 3, name: 'Sophie Laurent', email: 'sophie.l@tempo.com', phone: '06 45 67 89 01', upcomingShifts: 4, weekHours: 40, weekShifts: 5, availability: ['Lun 10h-19h', 'Mar 10h-19h', 'Mer 10h-19h', 'Jeu 10h-19h', 'Ven 10h-19h'] },
    { id: 4, name: 'Pierre Rousseau', email: 'pierre.r@tempo.com', phone: '06 23 45 67 89', upcomingShifts: 2, weekHours: 32, weekShifts: 4, availability: ['Lun 8h-16h', 'Mar 8h-16h', 'Mer 8h-16h', 'Jeu 8h-16h'] },
  ];

  return (
    <div style={{ padding: 16, backgroundColor: '#f9fafb', height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: '600', color: '#1f2937', marginBottom: 4 }}>
          Employés
        </div>
        <div style={{ fontSize: 14, color: '#6b7280' }}>
          {employees.length} employé{employees.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Employees List */}
      {employees.map((emp) => (
        <div key={emp.id} style={employeeStyles.card}>
          {/* Header */}
          <div
            onClick={() => setExpandedEmployee(expandedEmployee === emp.id ? null : emp.id)}
            style={employeeStyles.header}
          >
            <div style={{ flex: 1 }}>
              <div style={employeeStyles.name}>{emp.name}</div>
              <div style={employeeStyles.email}>{emp.email}</div>
            </div>
            <div style={employeeStyles.stats}>
              <div style={employeeStyles.statsValue}>{emp.upcomingShifts}</div>
              <div style={employeeStyles.statsLabel}>Shifts</div>
            </div>
            <div style={{ fontSize: 18, color: '#6b7280', marginLeft: 12 }}>
              {expandedEmployee === emp.id ? '−' : '+'}
            </div>
          </div>

          {/* Expanded Details */}
          {expandedEmployee === emp.id && (
            <div style={employeeStyles.details}>
              {/* Week Stats */}
              <div style={employeeStyles.weekStats}>
                <div style={employeeStyles.weekStatItem}>
                  <div style={employeeStyles.weekStatValue}>{emp.weekHours}h</div>
                  <div style={employeeStyles.weekStatLabel}>Cette semaine</div>
                </div>
                <div style={employeeStyles.weekStatItem}>
                  <div style={employeeStyles.weekStatValue}>{emp.weekShifts}</div>
                  <div style={employeeStyles.weekStatLabel}>Shifts semaine</div>
                </div>
              </div>

              {/* Availability */}
              <div style={{ marginTop: 12 }}>
                <div style={employeeStyles.sectionTitle}>Disponibilités</div>
                <div style={employeeStyles.availabilityGrid}>
                  {emp.availability.map((avail, idx) => (
                    <div key={idx} style={employeeStyles.availabilityItem}>
                      <div style={employeeStyles.availabilityText}>{avail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div style={{ marginTop: 12 }}>
                <div style={employeeStyles.sectionTitle}>Contact</div>
                <div style={employeeStyles.contactItem}>
                  <div style={employeeStyles.contactLabel}>Email</div>
                  <div style={employeeStyles.contactValue}>{emp.email}</div>
                </div>
                <div style={employeeStyles.contactItem}>
                  <div style={employeeStyles.contactLabel}>Téléphone</div>
                  <div style={employeeStyles.contactValue}>{emp.phone}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ========== MAIN MODAL COMPONENT ==========
const AppSimulatorModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('home');

  if (!isOpen) return null;

  const tabs = [
    { id: 'home', label: 'Accueil', icon: ChartIcon },
    { id: 'planning', label: 'Horaires', icon: CalendarIcon },
    { id: 'employees', label: 'Employés', icon: UsersIcon },
    { id: 'profile', label: 'Profil', icon: TargetIcon },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: 20,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: 420,
            height: '90vh',
            maxHeight: 800,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* iPhone Mockup Frame */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1f2937',
            borderRadius: 50,
            padding: 12,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255,255,255,0.1)',
            position: 'relative',
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 150,
              height: 28,
              backgroundColor: '#000',
              borderRadius: '0 0 20px 20px',
              zIndex: 10,
            }} />

            {/* Screen */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: 42,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
          {/* Close button - Outside iPhone */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#fff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: '#1f2937',
              zIndex: 100,
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f1f5f9';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>

          {/* Tab Content */}
          <div style={{ flex: 1, overflow: 'hidden', paddingBottom: 65 }}>
            {activeTab === 'home' && <ManagerDashboard />}
            {activeTab === 'planning' && <WeeklyPlanningSimulator />}
            {activeTab === 'employees' && <EmployeesList />}
            {activeTab === 'profile' && <EmployeeDashboard />}
          </div>

          {/* Bottom Navigation Bar (Mobile Style) */}
          <div style={navStyles.tabBar}>
            {tabs.map(tab => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    ...navStyles.tabButton,
                    color: isActive ? '#8B7D6B' : '#6b7280',
                  }}
                >
                  <div style={navStyles.iconContainer}>
                    <TabIcon className="w-6 h-6" />
                  </div>
                  <div style={navStyles.tabLabel}>
                    {tab.label}
                  </div>
                </button>
              );
            })}
          </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ========== STYLES ==========
const dashStyles = {
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#8B7D6B',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  quickActionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9fafb',
    marginBottom: 8,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  summaryIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryIconText: {
    fontSize: 20,
  },
  summaryContent: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  quickActionDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  quickActionArrow: {
    fontSize: 18,
    color: '#9ca3af',
  },
  ticketItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9fafb',
    marginBottom: 8,
  },
  ticketName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  ticketReason: {
    fontSize: 12,
    color: '#6b7280',
  },
  badge: {
    padding: '4px 12px',
    borderRadius: 9999,
    fontSize: 11,
    fontWeight: '600',
  },
  actionButton: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#8B7D6B',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
};

const planStyles = {
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#0f172a',
    cursor: 'pointer',
  },
  todayButton: {
    padding: '4px 12px',
    borderRadius: 4,
    backgroundColor: '#8B7D6B',
    marginTop: 4,
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
  },
  employeeChip: {
    backgroundColor: '#f0fdf4',
    borderRadius: 20,
    padding: '8px 12px',
    minWidth: 100,
    border: '2px solid #bbf7d0',
    flexShrink: 0,
  },
  employeeChipSelected: {
    backgroundColor: '#3b82f6',
    borderColor: '#2563eb',
  },
  employeeChipName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#166534',
    marginBottom: 2,
  },
  employeeChipNameSelected: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  employeeChipTime: {
    fontSize: 11,
    color: '#16a34a',
  },
  employeeChipTimeSelected: {
    fontSize: 11,
    color: '#dbeafe',
  },
  selectedInfo: {
    backgroundColor: '#eff6ff',
    padding: '8px 16px',
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
  },
  selectedInfoText: {
    fontSize: 12,
    color: '#1e40af',
    fontWeight: '500',
  },
  daySelector: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: '8px',
    borderBottom: '1px solid #e2e8f0',
    gap: 4,
  },
  dayButton: {
    flex: 1,
    textAlign: 'center',
    padding: '6px 4px',
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    border: 'none',
  },
  dayButtonActive: {
    flex: 1,
    textAlign: 'center',
    padding: '6px 4px',
    borderRadius: 8,
    backgroundColor: '#3b82f6',
    border: 'none',
  },
  dayLetter: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748b',
  },
  dayLetterActive: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 2,
  },
  dayNumberActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 2,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    minWidth: 14,
    height: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 3px',
  },
  badgeActive: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    minWidth: 14,
    height: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 3px',
  },
  badgeText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#fff',
  },
  badgeTextActive: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  hourRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 2,
  },
  hourLabel: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    paddingRight: 8,
  },
  hourText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
    textAlign: 'right',
  },
  hourSlot: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    minHeight: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #e2e8f0',
  },
  hourSlotDroppable: {
    borderColor: '#3b82f6',
    borderStyle: 'dashed',
    backgroundColor: '#eff6ff',
  },
  hourSlotOccupied: {
    backgroundColor: '#dbeafe',
    borderColor: '#3b82f6',
  },
  hourSlotText: {
    fontSize: 11,
    color: '#3b82f6',
    fontWeight: '500',
  },
  shiftBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
  },
  shiftContent: {
    flex: 1,
  },
  shiftEmployeeName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 2,
  },
  shiftTime: {
    fontSize: 11,
    color: '#60a5fa',
    fontWeight: '500',
  },
  shiftDelete: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fee2e2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    border: 'none',
    cursor: 'pointer',
  },
  shiftDeleteText: {
    color: '#dc2626',
    fontSize: 14,
    fontWeight: 'bold',
  },
};

// Employee List Styles
const employeeStyles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  email: {
    fontSize: 13,
    color: '#6b7280',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E8E3DD',
    borderRadius: 8,
    padding: 8,
    minWidth: 60,
  },
  statsValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8B7D6B',
  },
  statsLabel: {
    fontSize: 11,
    color: '#6b7280',
    textAlign: 'center',
  },
  details: {
    padding: 16,
    paddingTop: 0,
    borderTop: '1px solid #f3f4f6',
  },
  weekStats: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  weekStatItem: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center',
  },
  weekStatValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  weekStatLabel: {
    fontSize: 11,
    color: '#6b7280',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  availabilityGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  availabilityItem: {
    backgroundColor: '#E8E3DD',
    borderRadius: 4,
    padding: 8,
    minWidth: 100,
  },
  availabilityText: {
    fontSize: 12,
    color: '#6B5D4F',
    fontWeight: '500',
  },
  contactItem: {
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 13,
    color: '#1f2937',
    fontWeight: '500',
  },
};

// Bottom Navigation Styles (Mobile)
const navStyles = {
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'row',
    height: 65,
    paddingTop: 10,
    paddingBottom: 10,
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
  },
  tabButton: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  iconContainer: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
};

export default AppSimulatorModal;
