const supabase = window.supabase.createClient(
    "https://pfdzieimosggmzmwikpj.supabase.co",
    "sb_publishable_aDhVtFxdRCCBgU-NEYozhw_JUrjmYlT"
);
async function getNextClass(){

    const { data: week } = await supabase
        .from("weekly_schedules")
        .select("id")
        .eq("published",true)
        .single();

    if(!week) return null;

    const { data } = await supabase
        .from("schedule_items")
        .select(`
            start_time,
            day,
            classes(name,color),
            coaches(name,photo_url)
        `)
        .eq("schedule_id",week.id)
        .order("start_time");

    return data;

}
