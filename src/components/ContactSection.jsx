import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { RocketIcon, MoneyIcon, HandshakeIcon, LockIcon, PhoneIcon, GlobeIcon, CelebrationIcon } from './Icons';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'service_2zuxfdb';
    const templateId = 'template_wl15dcg';
    const publicKey = 'DPJI0xo8zpgVObhf_';

    // Préparer les données du template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Non spécifié',
      employees: formData.employees || 'Non spécifié',
      phone: formData.phone || 'Non fourni',
      message: formData.message || 'Aucun message',
    };

    // Envoyer l'email via EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email envoyé avec succès!', response.status, response.text);
        setSubmitted(true);

        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            employees: '',
            phone: '',
            message: ''
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: RocketIcon,
      title: 'Démarrage rapide',
      description: 'Configuration en 5 minutes, vos employés peuvent commencer à utiliser l\'app immédiatement'
    },
    {
      icon: MoneyIcon,
      title: 'Économisez du temps et de l\'argent',
      description: 'Jusqu\'à 10h par semaine économisées sur la gestion administrative'
    },
    {
      icon: HandshakeIcon,
      title: 'Support personnalisé',
      description: 'Notre équipe vous accompagne tout au long de votre utilisation'
    },
    {
      icon: LockIcon,
      title: 'Sécurité garantie',
      description: 'Vos données sont cryptées et hébergées de manière sécurisée'
    },
    {
      icon: PhoneIcon,
      title: 'Applications mobiles',
      description: 'iOS et Android pour rester connecté partout, tout le temps'
    },
    {
      icon: GlobeIcon,
      title: 'Multi-régions',
      description: 'Disponible au Canada, au Maroc et bientôt partout dans le monde'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-tempo-light">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tempo-dark mb-4">
            Prêt à transformer votre gestion d'horaires ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez les commerces et startups qui simplifient leur quotidien avec TEMPO
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="flex justify-center mb-4">
                    <CelebrationIcon className="w-20 h-20 text-tempo-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-tempo-dark mb-2">
                    Merci pour votre intérêt !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous contacterons très bientôt.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-tempo-dark mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-tempo-primary focus:ring-2 focus:ring-tempo-primary/20 outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-tempo-dark mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-tempo-primary focus:ring-2 focus:ring-tempo-primary/20 outline-none transition-all"
                      placeholder="jean@entreprise.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-tempo-dark mb-2">
                      Nom de l'entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-tempo-primary focus:ring-2 focus:ring-tempo-primary/20 outline-none transition-all"
                      placeholder="Mon Commerce"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-tempo-dark mb-2">
                      Nombre d'employés
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-tempo-primary focus:ring-2 focus:ring-tempo-primary/20 outline-none transition-all"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="1-5">1-5 employés</option>
                      <option value="6-10">6-10 employés</option>
                      <option value="11-20">11-20 employés</option>
                      <option value="21-50">21-50 employés</option>
                      <option value="50+">Plus de 50 employés</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-tempo-dark mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-tempo-primary focus:ring-2 focus:ring-tempo-primary/20 outline-none transition-all"
                      placeholder="+1 (514) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-tempo-dark mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-tempo-primary focus:ring-2 focus:ring-tempo-primary/20 outline-none transition-all resize-none"
                      placeholder="Parlez-nous de vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-tempo-primary text-white rounded-lg font-semibold text-lg hover:bg-tempo-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Démarrer mon essai gratuit
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Info & benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-tempo-dark mb-6">
                Pourquoi choisir TEMPO ?
              </h3>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-shrink-0 p-2 bg-gradient-to-br from-tempo-primary to-tempo-accent rounded-lg text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-tempo-dark mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
