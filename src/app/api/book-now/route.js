import { getValidToken } from "../token/route";

export async function POST(req) {
  try {
    const body = await req.json();
    const { cart, form, checkIn, checkOut } = body;

    const BEDS24_TOKEN = await getValidToken();

    if (!BEDS24_TOKEN) {
      return Response.json({ error: "Token not configured" }, { status: 500 });
    }

    const bookingsPayload = cart.map((item) => ({
      roomId: item.listingId,
      arrival: checkIn ? checkIn : "2026-06-10",
      departure: checkOut ? checkOut : "2026-06-12",
      numAdult: item.adults,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.requests || "",
      price: item.subtotal,
      status: "confirmed",
      apiSourceId: "13",
    }));

    const bookingRes = await fetch("https://beds24.com/api/v2/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: BEDS24_TOKEN,
      },
      body: JSON.stringify(bookingsPayload),
    });

    const bookingData = await bookingRes.json();
    console.log("📥 Beds24 response:", JSON.stringify(bookingData, null, 2));

    if (!bookingRes.ok) {
      return Response.json(
        { error: bookingData?.message ?? `Beds24 error: ${bookingRes.status}` },
        { status: bookingRes.status },
      );
    }

    const failed = bookingData.find(
      (r) => !r.success && r.errors?.length > 0, // ✅ sirf actual errors pe fail karo
    );
    if (failed) {
      return Response.json(
        { error: failed.errors?.[0]?.message ?? "Booking failed" },
        { status: 400 },
      );
    }

    const bookingIds = bookingData.map((r) => r.new?.bookId);
    // const primaryBookingId = bookingIds[0];

    // const paymentUrl =
    //   `https://beds24.com/bookpay.php?bookid=${primaryBookingId}` +
    //   `&redirect=${encodeURIComponent(
    //     process.env.NEXT_PUBLIC_BASE_URL + "/checkout/success",
    //   )}`;
    // console.log("✅ Payment URL:", paymentUrl);

    return Response.json({ bookingIds });
  } catch (err) {
    console.error("❌ Crashed:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
