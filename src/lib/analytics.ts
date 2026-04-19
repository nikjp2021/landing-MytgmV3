"use client";

export type TrackEvent = 
  | "cta_click"
  | "pricing_view"
  | "pricing_click"
  | "exit_popup_shown"
  | "exit_popup_cta_click"
  | "form_submit"
  | "form_success"
  | "video_play"
  | "demo_booking_click"
  | "testimonial_filter";

interface TrackProps {
  event: TrackEvent;
  properties?: Record<string, string | number | boolean>;
}

export function trackEvent({ event, properties = {} }: TrackProps) {
  if (typeof window === "undefined") return;

  console.log(`[ANALYTICS] Track: ${event}`, properties);

  // [PLACEHOLDER: Add analytics integration]
  // Examples:
  // - Google Analytics: gtag('event', event, properties)
  // - Mixpanel: mixpanel.track(event, properties)
  // - Segment: analytics.track(event, properties)
}

export function trackCtaClick(ctaName: string, location: string) {
  trackEvent({
    event: "cta_click",
    properties: {
      cta_name: ctaName,
      location,
      timestamp: new Date().toISOString(),
    },
  });
}

export function trackPricingClick(plan: string) {
  trackEvent({
    event: "pricing_click",
    properties: {
      plan,
      timestamp: new Date().toISOString(),
    },
  });
}

export function trackExitPopupCta() {
  trackEvent({
    event: "exit_popup_cta_click",
    properties: {
      timestamp: new Date().toISOString(),
    },
  });
}

export function trackFormSubmit(formName: string) {
  trackEvent({
    event: "form_submit",
    properties: {
      form_name: formName,
      timestamp: new Date().toISOString(),
    },
  });
}

export function trackFormSuccess(formName: string) {
  trackEvent({
    event: "form_success",
    properties: {
      form_name: formName,
      timestamp: new Date().toISOString(),
    },
  });
}
