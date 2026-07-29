import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schemaType?: 'LocalBusiness' | 'FAQPage' | 'BreadcrumbList' | 'MedicalWebPage';
  schemaData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'New Krishna Medical Hall, Pharmacy Jehanabad, Medical Store Gaya Patna Main Rd, Buy Genuine Medicines Jehanabad, Baby Care Jehanabad, Surgical Equipment Bihar, WhatsApp Medicine Delivery Jehanabad',
  canonicalUrl,
  schemaType = 'LocalBusiness',
  schemaData
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (nameAttr: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', BUSINESS_INFO.name);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', BUSINESS_INFO.name);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);

    // 5. Canonical Link
    const currentUrl = canonicalUrl || window.location.href;
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', currentUrl);

    // 6. JSON-LD Schema
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${window.location.origin}/#pharmacy`,
      'name': BUSINESS_INFO.name,
      'description': BUSINESS_INFO.tagline,
      'url': window.location.origin,
      'telephone': BUSINESS_INFO.displayPhone,
      'priceRange': '₹',
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': BUSINESS_INFO.address,
        'addressLocality': BUSINESS_INFO.city,
        'addressRegion': BUSINESS_INFO.state,
        'postalCode': BUSINESS_INFO.pinCode,
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.215,
        'longitude': 84.985
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '07:00',
          'closes': '22:00'
        }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Medical & Pharmacy Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Prescription Medicines' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Health Devices & Monitors' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Surgical Equipment & Supplies' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Baby Care & Infant Formula' } }
        ]
      },
      'sameAs': [
        BUSINESS_INFO.social.googleBusiness,
        BUSINESS_INFO.social.facebook,
        BUSINESS_INFO.social.instagram
      ]
    };

    const targetSchema = schemaData || defaultLocalBusinessSchema;

    let scriptElement = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'json-ld-schema';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(targetSchema);

  }, [title, description, keywords, canonicalUrl, schemaType, schemaData]);

  return null;
};
