import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import useGeolocation, { PRICING } from '../hooks/useGeolocation';
import { CheckCircleIcon, XCircleIcon, SparklesIcon, GlobeIcon } from './Icons';

const plans = [
  {
    name: 'Gratuit',
    key: 'free',
    description: 'Parfait pour essayer TEMPO',
    popular: false,
    features: [
      'Jusqu\'à 5 employés',
      'Gestion d\'horaires de base',
      'Demandes de congés',
      'Application mobile',
      'Support par email'
    ],
    limitations: [
      'IA limitée',
      'Rapports basiques'
    ]
  },
  {
    name: 'Pro',
    key: 'pro',
    description: 'Pour les commerces en croissance',
    popular: true,
    features: [
      'Jusqu\'à 20 employés',
      'Toutes les fonctionnalités',
      'IA complète incluse',
      'Rapports avancés',
      'Notifications illimitées',
      'Planification automatique',
      'Support prioritaire',
      'Intégrations tierces'
    ],
    limitations: []
  },
  {
    name: 'Business',
    key: 'business',
    description: 'Pour les équipes plus grandes',
    popular: false,
    features: [
      'Employés illimités',
      'Tout du plan Pro +',
      'IA avancée avec prédictions',
      'Multi-établissements',
      'API complète',
      'Manager dédié',
      'Formation personnalisée',
      'SLA garanti 99.9%'
    ],
    limitations: []
  }
];

const PricingCard = ({ plan, currency, formatPrice, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const price = PRICING[plan.key][currency];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
        plan.popular ? 'ring-4 ring-tempo-primary scale-105 z-10' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-tempo-primary text-white px-4 py-2 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
          <SparklesIcon className="w-4 h-4" />
          Plus populaire
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-tempo-dark mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 mb-6">
          {plan.description}
        </p>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-tempo-dark">
              {price}
            </span>
            <span className="text-2xl text-tempo-primary font-semibold">
              {currency === 'MAD' ? 'dh' : '$'}
            </span>
            {price > 0 && (
              <span className="text-gray-500">/mois</span>
            )}
          </div>
          {price === 0 && (
            <p className="text-sm text-gray-500 mt-2">Pour toujours</p>
          )}
        </div>

        <a
          href="#contact"
          className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 mb-6 ${
            plan.popular
              ? 'bg-tempo-primary text-white hover:bg-tempo-dark shadow-lg hover:shadow-xl'
              : 'bg-tempo-light text-tempo-dark hover:bg-tempo-primary hover:text-white'
          }`}
        >
          {plan.key === 'free' ? 'Commencer gratuitement' : 'Essayer 30 jours gratuits'}
        </a>

        <div className="space-y-3">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}

          {plan.limitations.map((limitation, idx) => (
            <div key={idx} className="flex items-start gap-3 opacity-60">
              <XCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-500 line-through">{limitation}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currency, currencyInfo, loading, formatPrice } = useGeolocation();

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-tempo-light to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tempo-dark mb-4">
            Tarifs transparents et adaptés
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Choisissez le plan qui correspond à vos besoins
          </p>
          {!loading && (
            <p className="text-sm text-gray-500">
              Prix affichés en {currencyInfo.name} pour {currencyInfo.country} 🌍
            </p>
          )}
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-tempo-primary border-t-transparent"></div>
            <p className="text-gray-600 mt-4">Chargement des tarifs...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.key}
                plan={plan}
                currency={currency}
                formatPrice={formatPrice}
                index={index}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            🎁 <strong>30 jours d'essai gratuit</strong> sur tous les plans payants - Aucune carte bancaire requise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
