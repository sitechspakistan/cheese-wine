const TOKEN =
  "mlcRaqmN4wpr/tAJNb2KKlHHETohyHSZ8GRbtWUaLJ6Rg0XUZS11QZyoamvCe4ePtSvhYjPhznkplFcJFLyRs+UuGI/YWyl41T/2/QVpD57YvcdAht0GdkiSNcQcTf9MG0Tv9qcvFH+8vMhTJYzcHA==";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "322695";

  const url = `https://beds24.com/api/v2/properties?id=${id}&includePictures=true&includeAllRooms=true`;

  try {
    const res = await fetch(url, {
      headers: { accept: "application/json", token: TOKEN },
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ error: "Upstream error" }, { status: 502 });
  }
}
