
export const arcsData = [
  {
    "startLat": 40.7128, // New York, US
    "startLng": -74.0060, // New York, US
    "endLat": 28.6139, // New Delhi, India
    "endLng": 77.2090, // New Delhi, India
    "color": [
      "blue",
      "yellow"
    ]
  },
  {
    "startLat": 40.7128, // New York, US
    "startLng": -74.0060, // New York, US
    "endLat": 19.0760, // Mumbai, India
    "endLng": 72.8777, // Mumbai, India
    "color": [
      "orange",
      "blue"
    ]
  },
  {
    "startLat": 40.7128, // New York, US
    "startLng": -74.0060, // New York, US
    "endLat": 13.0827, // Chennai, India
    "endLng": 80.2707, // Chennai, India
    "color": [
      "purple",
      "green"
    ]
  },
  {
    "startLat": 40.7128, // New York, US
    "startLng": -74.0060, // New York, US
    "endLat": 12.9716, // Bangalore, India
    "endLng": 77.5946, // Bangalore, India
    "color": [
      "yellow",
      "red"
    ]
  },
  {
    "startLat": 34.0522, // Los Angeles, US
    "startLng": -118.2437, // Los Angeles, US
    "endLat": 28.6139, // New Delhi, India
    "endLng": 77.2090, // New Delhi, India
    "color": [
      "blue",
      "white"
    ]
  },
  {
    "startLat": 34.0522, // Los Angeles, US
    "startLng": -118.2437, // Los Angeles, US
    "endLat": 13.0827, // Chennai, India
    "endLng": 80.2707, // Chennai, India
    "color": [
      "red",
      "cyan"
    ]
  },
  {
    "startLat": 12.9716, // Bangalore, India
    "startLng": 77.5946, // Bangalore, India
    "endLat": 29.7604, // Houston, US
    "endLng": -95.3698, // Houston, US
    "color": [
      "white",
      "yellow"
    ]
  },
  {
    "startLat": 12.9716, // Bangalore, India
    "startLng": 77.5946, // Bangalore, India
    "endLat": 32.7767, // Dallas, US
    "endLng": -96.7970, // Dallas, US
    "color": [
      "blue",
      "red"
    ]
  },
  {
    "startLat": 12.9716, // Bangalore, India
    "startLng": 77.5946, // Bangalore, India
    "endLat": 41.8781, // Chicago, US
    "endLng": -87.6298, // Chicago, US
    "color": [
      "pink",
      "cyan"
    ]
  },
  {
    "startLat": 19.0760, // Mumbai, India
    "startLng": 72.8777, // Mumbai, India
    "endLat": 34.0522, // Los Angeles, US
    "endLng": -118.2437, // Los Angeles, US
    "color": [
      "yellow",
      "blue"
    ]
  },
  {
    "startLat": 19.0760, // Mumbai, India
    "startLng": 72.8777, // Mumbai, India
    "endLat": 40.7128, // New York, US
    "endLng": -74.0060, // New York, US
    "color": [
      "red",
      "purple"
    ]
  },
  {
    "startLat": 19.0760, // Mumbai, India
    "startLng": 72.8777, // Mumbai, India
    "endLat": 47.6062, // Seattle, US
    "endLng": -122.3321, // Seattle, US
    "color": [
      "white",
      "green"
    ]
  },
  {
    "startLat": 13.0827, // Chennai, India
    "startLng": 80.2707, // Chennai, India
    "endLat": 37.7749, // San Francisco, US
    "endLng": -122.4194, // San Francisco, US
    "color": [
      "blue",
      "orange"
    ]
  },
  {
    "startLat": 13.0827, // Chennai, India
    "startLng": 80.2707, // Chennai, India
    "endLat": 39.7392, // Denver, US
    "endLng": -104.9903, // Denver, US
    "color": [
      "red",
      "yellow"
    ]
  },
  {
    "startLat": 13.0827, // Chennai, India
    "startLng": 80.2707, // Chennai, India
    "endLat": 34.0522, // Los Angeles, US
    "endLng": -118.2437, // Los Angeles, US
    "color": [
      "white",
      "cyan"
    ]
  },
  {
    "startLat": 22.5726, // Kolkata, India
    "startLng": 88.3639, // Kolkata, India
    "endLat": 47.6062, // Seattle, US
    "endLng": -122.3321, // Seattle, US
    "color": [
      "purple",
      "white"
    ]
  }
]

// Handle window resizing for the globe
const globeCanvas = document.getElementById("globeCanvas");

let width;
function resizeGlobe() {
  width = window.innerWidth > 968 ? '620' : 320;
  globeCanvas.style.width = `${width}px`;
  globeCanvas.style.height =`${width}px`;
}
resizeGlobe()
const myGlobe = Globe()
      .globeImageUrl('./assets/earth-blue-marble.jpg')
      .arcsData(arcsData)// Disable auto-scaling of altitude
.arcAltitude(0.3)
      .arcStroke(0.5)
      .arcDashLength(1)
      .arcDashGap(0.4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(2500)
      .arcColor('color')
      .width(width)
      .height(width)
      .backgroundColor('#00000011')
      (globeCanvas);
      
// Set point of view to focus on India
    myGlobe.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2 }); // Altitude controls zoom level

// Disable zoom interaction
    myGlobe.controls().enableZoom = false;
// Call resize once to initialize dimensions
resizeGlobe();
window.addEventListener('resize', resizeGlobe);
