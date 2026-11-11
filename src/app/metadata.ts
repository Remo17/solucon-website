import { useEffect } from 'react'

const origin = 'https://solucon-website-prod.web.app'
const pages: Record<string, [string, string]> = {
  '/': ['Solucon | Websites, software & connected systems', 'South African digital design and development for businesses and educators. Explore websites, web applications and learning projects, then discuss your brief.'],
  '/services': ['Services | Solucon', 'Custom software, websites, domains, hosting, TLS and HTTPS, business email and Google Workspace, APIs and education technology from Solucon.'],
  '/work': ['Work | Solucon', 'Case studies for Bokamoso Geomatics and Taxila Secondary School, two live websites designed and built by Solucon.'],
  '/about': ['About & team | Solucon', 'Meet Remoratile Tjia and explore the principles behind Solucon, a South African technology company focused on useful design and practical engineering.'],
  '/contact': ['Discuss your project | Solucon', 'Contact Solucon in Modimolle, South Africa. Prepare an email brief for a website, web application or connected system.'],
}

export function usePageMetadata(path: string) {
  useEffect(() => {
    const page = pages[path]
    const [title, description] = page ?? ['Page not found | Solucon', 'This page could not be found. Return to Solucon to explore our services and projects.']
    document.title = title
    const meta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.content = content
    }
    meta('name', 'description', description)
    meta('property', 'og:title', title)
    meta('property', 'og:description', description)
    meta('property', 'og:type', 'website')
    meta('property', 'og:url', origin + path)
    // Preserve a host-configured noindex directive on private previews.
    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (robots?.dataset.routeManaged || !robots) {
      meta('name', 'robots', page ? 'index, follow' : 'noindex, follow')
      document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')!.dataset.routeManaged = 'true'
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = origin + path
  }, [path])
}
