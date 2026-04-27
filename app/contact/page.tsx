import { getDictionary } from '@/data/dictionaries';
import { NavSection } from '@/components/FloatingNav';
import { Phone, FileText, Zap } from 'lucide-react';
import ContactClient from './contact-client';

export default async function ContactPage() {
  const dict = await getDictionary('th', 'contact');
  const navDict = await getDictionary('th', 'navigation');

  const contactSections: NavSection[] = [
    { id: 'direct-contact', label: dict.floatingNav.direct, num: '01', icon: <Phone size={18} /> },
    { id: 'contact-form', label: dict.floatingNav.details, num: '02', icon: <FileText size={18} />, offset: 80 },
    { id: 'roadmap', label: dict.floatingNav.roadmap, num: '03', icon: <Zap size={18} />, offset: 80 },
  ];

  return (
    <ContactClient dict={dict} navDict={navDict} contactSections={contactSections} />
  );
}
