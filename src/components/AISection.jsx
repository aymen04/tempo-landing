import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChartIcon, TargetIcon, RobotIcon, BulbIcon, WarningIcon, BrainIcon, MessageIcon } from './Icons';

const aiFeatures = [
  {
    title: 'Résumé intelligent du planning',
    description: 'L\'IA analyse votre planning et génère un résumé clair : qui travaille, les absences prévues, et les points à surveiller.',
    icon: ChartIcon,
    demo: 'Cette semaine : 15 employés actifs, 3 absences, couverture optimale sauf jeudi après-midi.'
  },
  {
    title: 'Affichage des horaires optimisés',
    description: 'Visualisation intelligente qui met en avant les conflits, les sous-effectifs et les opportunités d\'optimisation.',
    icon: TargetIcon,
    demo: 'Alerte : Vendredi 14h - sous-effectif détecté (2 personnes au lieu de 4 recommandées)'
  },
  {
    title: 'Génération automatique de planning',
    description: 'L\'IA crée des plannings équilibrés en tenant compte des disponibilités, compétences et préférences de chacun.',
    icon: RobotIcon,
    demo: 'Planning généré pour la semaine 12 : 100% de couverture, équité des heures respectée.'
  },
  {
    title: 'Suggestions d\'amélioration',
    description: 'Recommandations proactives pour optimiser votre organisation : réduction des coûts, meilleure répartition, prévention du burnout.',
    icon: BulbIcon,
    demo: 'Suggestion : Redistribuer 4h de Sarah vers Marc pour équilibrer la charge de travail.'
  },
  {
    title: 'Détection de problèmes',
    description: 'L\'IA identifie automatiquement les problèmes : conflits d\'horaires, surcharge de travail, non-respect des réglementations.',
    icon: WarningIcon,
    demo: 'Problème détecté : Julie dépasse 48h cette semaine (limite légale : 44h)'
  }
];

const AIFeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 p-3 bg-gradient-to-br from-tempo-primary to-tempo-accent rounded-xl text-white"
          >
            <IconComponent className="w-6 h-6" />
          </motion.div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-tempo-dark mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {feature.description}
            </p>

            {/* Demo preview */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0
              }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-r from-tempo-primary/10 to-tempo-accent/10 rounded-lg p-4 border-l-4 border-tempo-primary">
                <div className="flex items-start gap-2">
                  <MessageIcon className="w-4 h-4 text-tempo-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-tempo-dark font-medium">
                    {feature.demo}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AISection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai" className="py-24 bg-gradient-to-br from-tempo-dark via-gray-900 to-tempo-dark text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #8B7D6B 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="p-6 bg-gradient-to-br from-tempo-primary to-tempo-accent rounded-2xl">
              <BrainIcon className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Propulsé par l'Intelligence Artificielle
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TEMPO utilise l'IA pour transformer la gestion d'horaires en une expérience intelligente et proactive
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {aiFeatures.map((feature, index) => (
            <AIFeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA in AI section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-white text-tempo-dark rounded-lg font-semibold text-lg hover:bg-tempo-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Découvrez l'IA de TEMPO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
