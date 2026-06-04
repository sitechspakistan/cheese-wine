const BEDS24_TOKEN = process.env.BEDS24_TOKEN;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const propertyId = searchParams.get("propertyId");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  if (!propertyId || !startDate || !endDate) {
    return Response.json({ error: "Missing params" }, { status: 400 });
  }

  const url = `https://beds24.com/api/v2/inventory/rooms/availability?propertyId=${propertyId}&startDate=${startDate}&endDate=${endDate}`;

  try {
    const res = await fetch(url, {
      headers: { accept: "application/json", token: BEDS24_TOKEN },
    });
    const data = await res.json();
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Upstream error" }, { status: 502 });
  }
}
