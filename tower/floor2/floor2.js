const shrimp_number = 247;
const not_shrimp_index = Math.floor(Math.random() * shrimp_number);

for (let i = 0; i < shrimp_number; i++) {
    if (i == not_shrimp_index) {
        fetch("not-shrimp.png", {
            method:"GET",
            headers: {
                "q":"c",
                "v":"f",
                "t":"d",
                "m":"l",
                "w":"p",
                "g":"b",
                "1":JSON.stringify(["VIII", 11, "2.0"]),
                "2":JSON.stringify([2, "T", "T-1"]),
                "3":JSON.stringify(["${cbrt(32)*1.25992104989}", "worlds best bot made by grub", "smots*2"]),
                "goal":"/tower/floor2/shrimp-${DECODED-TEXT.replace(\" \", \"\")}/index.html"
            }
        })
    } else {
        fetch("shrimp.png", {
            method:"GET"
        })
    }
}