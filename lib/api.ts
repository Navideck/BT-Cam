export async function fetchData() {
  try {
    const response = await fetch(
      "https://navideck.com/resources/anoar34g7vbnk4/api/node/app/3a88ab37-0507-4e38-b18b-a3448d640caf?resourceVersion=id%3A566",
      { next: { revalidate: 3600 } }, // Revalidate every hour
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching data:", error)
    return { error: "Failed to fetch data" }
  }
}

