import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarIcon, TargetIcon, ChartIcon, BellIcon, PhoneIcon, RocketIcon } from './Icons';

const features = [
  {
    icon: CalendarIcon,
    title: 'Gestion d\'horaires simplifiée',
    description: 'Créez, modifiez et partagez les horaires de vos employés en quelques clics. Interface intuitive et rapide.',
  },
  {
    icon: TargetIcon,
    title: 'Demandes de congés automatisées',
    description: 'Vos employés soumettent leurs demandes directement. Approuvez ou refusez en un clic avec notifications automatiques.',
  },
  {
    icon: RocketIcon,
    title: 'Suivi en temps réel',
    description: 'Visualisez les disponibilités, absences et présences de votre équipe instantanément.',
  },
  {
    icon: BellIcon,
    title: 'Notifications intelligentes',
    description: 'Alertes automatiques pour les changements d\'horaires, demandes en attente et rappels importants.',
  },
  {
    icon: ChartIcon,
    title: 'Rapports détaillés',
    description: 'Analyses complètes des heures travaillées, absences et tendances de votre équipe.',
  },
  {
    icon: PhoneIcon,
    title: 'Application mobile',
    description: 'Accès complet depuis n\'importe où. iOS et Android pour vos employés et managers.',
  }
];

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FeatureCard = ({ feature }) => {
  const background = '#8B7D6B';
  const IconComponent = feature.icon;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      style={{
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 20,
        marginBottom: -120,
      }}
    >
      {/* Splash background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />

      {/* Card */}
      <motion.div
        variants={cardVariants}
        style={{
          fontSize: 164,
          width: 300,
          height: 430,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          background: '#f5f5f5',
          boxShadow: '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
          transformOrigin: '10% 60%',
          padding: '20px',
        }}
      >
        <div style={{ marginBottom: 20, color: '#3D3D3D' }}>
          <IconComponent className="w-24 h-24" />
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 'bold', color: '#3D3D3D', marginBottom: 10, textAlign: 'center' }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 1.5 }}>
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-tempo-light">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tempo-dark mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour gérer votre équipe efficacement
          </p>
        </motion.div>

        <div style={{
          margin: '100px auto',
          maxWidth: 1200,
          paddingBottom: 100,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
        }}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
