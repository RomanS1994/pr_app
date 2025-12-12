import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY;

// export async function geocodeAddress(address) {
//   if (!API_KEY) {
//     throw new Error("Google Maps API key is missing");
//   }

//   const url = "https://maps.googleapis.com/maps/api/geocode/json";
//   const { data } = await axios.get(url, {
//     params: { address, key: API_KEY },
//   });

//   if (data.status !== "OK" || !data.results?.[0]) {
//     throw new Error(
//       `Geocoding failed: ${data.status}${
//         data.error_message ? ` - ${data.error_message}` : ""
//       }`
//     );
//   }

//   const { lat, lng } = data.results[0].geometry.location;
//   return { latitude: lat, longitude: lng };
// }
