async function getNextClass() {

    const { data: week, error: weekError } = await window.sb
        .from("weekly_schedules")
        .select("id")
        .eq("published", true)
        .single();

    if (weekError || !week) {
        console.error("No hay horario publicado");
        return null;
    }

    const { data, error } = await window.sb
        .from("schedule_items")
        .select(`
            start_time,
            day,
            classes(name,color),
            coaches(name,photo_url)
        `)
        .eq("schedule_id", week.id)
        .order("day")
        .order("start_time");

    if (error) {
        console.error(error);
        return null;
    }

    // TEMPORAL:
    // Por ahora usamos la primera clase.
    // Después haremos que encuentre automáticamente
    // la siguiente según la hora actual.

    console.log("HORARIO:", data);
    return data[0];
}
