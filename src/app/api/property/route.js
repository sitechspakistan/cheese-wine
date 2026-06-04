const BEDS24_TOKEN = process.env.BEDS24_TOKEN;
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "322695";

  const url = `https://beds24.com/api/v2/properties?id=${id}&includePictures=true&includeAllRooms=true`;

  try {
    const res = await fetch(url, {
      headers: { accept: "application/json", token: BEDS24_TOKEN },
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    console.log("data:", data);

    return Response.json(data);
  } catch {
    return Response.json({ error: "Upstream error" }, { status: 502 });
  }
}
