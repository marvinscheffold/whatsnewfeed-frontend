import "./posts.css";
import { Post, PostData } from "../post/post";

export function Posts() {
    const postsData: PostData[] = [
        {
            key: "1",
            creator: "Rahell Instagramm Gruppe",
            text: "~let your heart be the compass~",
            imgSrc: null,
            avatarImgSrc:
                "https://pps.whatsapp.net/v/t61.24694-24/251166267_314995567448918_3292988449993069769_n.jpg?ccb=11-4&oh=01_AVygpZCO4y3-QBdd6UG0jLgzXM2cvbAPvoFdo7U0plCxWg&oe=628F34FF",
            info: "Has a new status",
        },
        {
            key: "2",
            creator: "Rob Alexanderplatz",
            text: "Lose the conversation for the message that you'll never read",
            imgSrc: null,
            avatarImgSrc: null,
            info: "Has a new status",
        },
        {
            key: "3",
            creator: "Chris Hauptbahnhof",
            text: null,
            imgSrc: "https://pps.whatsapp.net/v/t61.24694-24/261297533_668884550874771_6056406359190166302_n.jpg?ccb=11-4&oh=01_AVyoZP9Ady6NJMwBWUQNfhOOj5v_NqWx-HMsmPIG3oXoVQ&oe=628FC189x",
            avatarImgSrc:
                "https://pps.whatsapp.net/v/t61.24694-24/261297533_668884550874771_6056406359190166302_n.jpg?ccb=11-4&oh=01_AVyoZP9Ady6NJMwBWUQNfhOOj5v_NqWx-HMsmPIG3oXoVQ&oe=628FC189",
            info: "Has a new picture",
        },
        {
            key: "4",
            creator: "Steffi Weisensee",
            text: "❣Schwanessa ❤MAIS🌽SWEETLADY🤣",
            imgSrc: null,
            avatarImgSrc:
                "https://pps.whatsapp.net/v/t61.24694-24/239857157_710837346785663_9028875801480346221_n.jpg?ccb=11-4&oh=01_AVyvIawY3mdF-5avik3DyVSB-Zp7CK5gbgI6dqOGIWOMeg&oe=628D5A41",
            info: "Has a new status",
        },
        {
            key: "5",
            creator: "Enise Nachhilfe",
            text: null,
            imgSrc: "https://pps.whatsapp.net/v/t61.24694-24/264333477_681394083114597_31478715563650024_n.jpg?ccb=11-4&oh=01_AVxeJl4NT_5ntQznOO5Jkoi56TvNfs-1N9CU-cb2GoBc8w&oe=6290EF27",
            avatarImgSrc:
                "https://pps.whatsapp.net/v/t61.24694-24/264333477_681394083114597_31478715563650024_n.jpg?ccb=11-4&oh=01_AVxeJl4NT_5ntQznOO5Jkoi56TvNfs-1N9CU-cb2GoBc8w&oe=6290EF27",
            info: "Has a new picture",
        },
        {
            key: "6",
            creator: "Daniel Nachhilfe",
            text: "Hallo! Ich benutze WhatsApp.",
            imgSrc: null,
            avatarImgSrc:
                "https://pps.whatsapp.net/v/t61.24694-24/55790305_2137159649724453_793389891042934784_n.jpg?ccb=11-4&oh=01_AVxe5BTM3j3xNarsstutmJlksiBG8N4pzSEzmAsjaGJqsA&oe=62909FBE",
            info: "Has a new status",
        },
    ];
    return (
        <section className="posts">
            {postsData.map((postData) => {
                return <Post {...postData} />;
            })}
        </section>
    );
}
