import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SparklesIcon, DeviceIcon, CalendarIcon, PlaneIcon, RobotIcon, BellIcon, ChartIcon } from './Icons';
import AppSimulatorModal from './AppSimulatorModal';

const DemoSection = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSimulator, setShowSimulator] = useState(false);

  // Auto-play video when section comes into view
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, [isInView]);

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-white via-tempo-light to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-tempo-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tempo-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-tempo-primary/10 px-4 py-2 rounded-full mb-4">
            <SparklesIcon className="w-5 h-5 text-tempo-primary" />
            <span className="text-tempo-primary font-semibold">Voir TEMPO en action</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-tempo-dark mb-4">
            Découvrez l'application en action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une démonstration interactive des fonctionnalités de TEMPO
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Video Demo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="relative w-full">
                {/* Video container */}
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                    loop
                    muted
                    playsInline
                    poster="/assets/demo-thumbnail.jpg"
                  >
                    <source src="/assets/demo-video.mp4" type="video/mp4" />
                    <source src="/assets/demo-video.webm" type="video/webm" />
                  </video>

                  {/* Badge 100% MOBILE en bas à droite */}
                  <div className="absolute bottom-2 right-2 bg-tempo-primary text-white rounded-lg font-bold shadow-lg pointer-events-none flex items-center justify-center" style={{ width: '16%', height: '9%', fontSize: '0.65rem' }}>
                    100% MOBILE
                  </div>
                </div>

                {/* Bouton "Essayer la démo interactive" */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowSimulator(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-tempo-primary to-tempo-accent text-white rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <SparklesIcon className="w-6 h-6" />
                    <span>Essayer la démo interactive</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right: Features list */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-tempo-dark mb-8">
                Dans cette démo, vous verrez :
              </h3>

              {[
                {
                  title: 'Tableau de bord Manager',
                  description: 'Vue d\'ensemble complète avec stats en temps réel et actions rapides',
                  icon: ChartIcon
                },
                {
                  title: 'Tableau de bord Employé',
                  description: 'Interface simplifiée avec prochain quart et statistiques personnelles',
                  icon: DeviceIcon
                },
                {
                  title: 'Planning hebdomadaire',
                  description: 'Gestion visuelle des horaires avec drag-and-drop intuitif',
                  icon: CalendarIcon
                },
                {
                  title: 'Demandes de congés',
                  description: 'Soumission et validation instantanée des demandes',
                  icon: PlaneIcon
                },
                {
                  title: 'IA en action',
                  description: 'Génération automatique de planning optimisé avec l\'IA',
                  icon: RobotIcon
                },
                {
                  title: 'Interface interactive',
                  description: 'Explorez les différentes vues en cliquant sur les onglets ci-contre',
                  icon: BellIcon
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-tempo-primary to-tempo-accent rounded-lg text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tempo-dark mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-tempo-primary text-white rounded-lg font-semibold text-lg hover:bg-tempo-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Essayer gratuitement
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Demo Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-tempo-primary" />
              <span className="text-gray-700">Interface 100% interactive</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-tempo-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <span className="text-gray-700">Design de l'app réelle</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Simulator */}
      <AppSimulatorModal isOpen={showSimulator} onClose={() => setShowSimulator(false)} />
    </section>
  );
};

export default DemoSection;
