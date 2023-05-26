import { createClient } from "next-sanity";
// Create a Sanity client
const client = createClient({
  projectId: "juxljha6",
  dataset: "production",
  useCdn: true, // Enable CDN if available for faster responses
});

// Function to fetch data from Sanity
export async function fetchData() {
  try {
    // Define your query
    const query = `*[_type == "test-sanity"]{
      _id,
      name
    }`;

    // Fetch data using the query
    const data = await client.fetch(query);

    // Process the fetched data
    console.log("Fetched data:", data);

    // Return or further process the data as needed
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error scenarios
  }
}
