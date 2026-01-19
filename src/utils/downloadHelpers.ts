// Function to detect user's operating system
export const detectOS = (): 'android' | 'ios' | 'other' => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';

  // Check for Android
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // Check for iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }

  // Default to other
  return 'other';
};

// Function to handle downloads based on OS
export const handleDownload = (): void => {
  const os = detectOS();

  if (os === 'android') {
    // For Android: Download APK file
    window.location.href = '/downloads/antidel-v2.1.0.apk';
  } else if (os === 'ios') {
    // For iOS: Download IPA file or installation profile
    window.location.href = '/downloads/antidel-v2.1.0.ipa';
  } else {
    // For desktop or unsupported devices
    alert("Antidel is available for Android and iOS mobile devices only.");
  }
};

// Get button text based on OS
export const getDownloadButtonText = (): string => {
  const os = detectOS();
  
  if (os === 'android') {
    return 'download.android';
  } else if (os === 'ios') {
    return 'download.ios';
  }
  
  return 'download.button';
};