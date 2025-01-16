import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { ViewportScroller } from '@angular/common';

interface blogPosts {
  id: number;
  imgSrc: string;
  title: string;
  data1: string;
  data2: string;
  data3: string;
}
interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

interface quicklinks {
  id: number;
  title: string;
  link: string;
}

interface demos {
  id: number;
  name: string;
  subtext?: string;
  url: string;
  imgSrc: string;
}

interface testimonials {
  id: number;
  name: string;
  subtext: string;
  imgSrc: string;
}

interface features {
  id: number;
  icon: string;
  title: string;
  subtext: string;
  subtextMore?: string;
  color: string;
}

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
})
export class AppLandingpageComponent {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  options = this.settings.getOptions();

  constructor(
    private settings: CoreService,
    private scroller: ViewportScroller
  ) {}

  // scroll to demos
  gotoDemos() {
    this.scroller.scrollToAnchor('demos');
  }
  blogPosts: blogPosts[] = [
    {
      id: 1,
      imgSrc: '/assets/images/blog/farmer.jpg',
      title: 'For Farmers',
      data1: 'Seamlessly list your products with detailed descriptions, certifications, and pricing.',
      data2: 'Reach buyers directly through live auctions and integrated chat.',
      data3:'Learn sustainable farming techniques through our multilingual knowledge hub.'
    },
    {
      id: 2,
      imgSrc: '/assets/images/blog/buyers.png',
      title: 'For Buyers',
      data1: 'Access a wide range of high-quality products directly from trusted farmers.',
      data2: 'Make informed decisions with detailed farmer profiles and QR code traceability.',
      data3: 'Participate in live auctions to get the best prices.'
    },
    {
      id: 3,
      imgSrc: '/assets/images/blog/govt.avif',
      title:'For Government Officials',
      data1: 'Share crop advisories, weather updates, and market insights instantly.',
      data2: 'Stay connected with real-time notifications and a transparent system.',
      data3:'Learn sustainable farming techniques through our multilingual knowledge hub.'
    },
  ];
  notificationsData = [
    {
      id: 1,
      advisory_id: 101,
      title: 'System Update',
      content: 'The system will undergo maintenance on 2025-02-01.',
    },
    {
      id: 2,
      advisory_id: 102,
      title: 'Policy Change',
      content: 'New policies will be effective from 2025-02-10.',
    },
    {
      id: 3,
      advisory_id: 103,
      title: 'Service Alert',
      content: 'Some services may be unavailable on 2025-02-15.',
    },
  ];
  educationalContentData = [
    {
      id: 1,
      advisory_id: 101,
      title: 'Introduction to Angular',
      content: 'This course covers the basics of Angular framework.',
    },
    {
      id: 2,
      advisory_id: 102,
      title: 'JavaScript Basics',
      content: 'Learn the fundamentals of JavaScript programming.',
    },
    {
      id: 3,
      advisory_id: 103,
      title: 'Web Development',
      content: 'Comprehensive guide to becoming a full-stack developer.',
    },
  ];
  features: features[] = [
    {
      id: 1,
      icon: 'wand',
      title: 'Live Auctions',
      color: 'primary',
      subtext:
        'Buy and sell in real-time with our innovative auction system. Chat directly with buyers or sellers to negotiate prices and finalize deals.',
    },
    {
      id: 2,
      icon: 'adjustments',
      title: 'Transparent Product Listings',
      color: 'accent',
      subtext:
        'Each product is assigned a unique QR code linked to detailed farmer profiles, certifications, & production methods. Know exactly what you’re buying.',
    },
    {
      id: 3,
      icon: 'archive',
      title: 'Educational Resources',
      color: 'warning',
      subtext: 'Access our knowledge hub filled guides, and FAQs on sustainable farming. Learn in your preferred language with region-specific insights.',
    },
    {
      id: 4,
      icon: 'clock',
      title: 'Real-Time Notifications',
      color: 'error',
      subtext: 'Stay ahead with push notifications for',
      subtextMore: '1:Crop advisories 2:Market updates 3:Weather forecasts.',
    },
    {
      id: 5,
      icon: 'tag',
      title: 'Feedback System ',
      color: 'success',
      subtext: 'Build trust with reviews. Farmers can review buyers, and buyers can leave feedback on products, creating a reliable marketplace.',
    },
    {
      id: 9,
      icon: 'chart-pie',
      title: 'Offline Functionality',
      color: 'error',
      subtext: 'No internet? No problem. View educational content and product listings offline. Your data syncs automatically when you’re back online.',
    },
  ];
 
}
