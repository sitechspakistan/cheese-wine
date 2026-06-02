const TOKEN =
  "mlcRaqmN4wpr/tAJNb2KKlHHETohyHSZ8GRbtWUaLJ6Rg0XUZS11QZyoamvCe4ePtSvhYjPhznkplFcJFLyRs+UuGI/YWyl41T/2/QVpD57YvcdAht0GdkiSNcQcTf9MG0Tv9qcvFH+8vMhTJYzcHA==";

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
      headers: { accept: "application/json", token: TOKEN },
    });
    const data = await res.json();
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Upstream error" }, { status: 502 });
  }
}
