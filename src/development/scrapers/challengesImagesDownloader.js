/*
============================================
    requires
============================================
*/

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const imagesDir = path.join(__dirname, '../../../public/static/img/challenges');

/*
============================================
    variables
============================================
*/

/*  code used in devtools due to lazy loading */

// const images = [];
// const cards = document.querySelectorAll('.PreviewItem__StyledItem-wu6lmx-0');
// cards.forEach(card => card.querySelector('.lazyload-wrapper a img').src); 
// console.log(images);

const images = ["https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/qwfjjtc2edfogm32keno.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/fp0qtspesm6i0miyqncg.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/xpfjecrtnna43teylvoa.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/f00lkcojzyklnglc3ffr.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/brpylxucuonbpy2mujdy.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yf5s8ekgwaft5w57ju6u.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/elfkzwrvlhcxvoy9442f.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ty4ppudcq94rtgj4rv6p.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/gaqhj5z5pdvyztzm8mwt.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/dia0o9uigiiz4gebiqps.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/cpub8v9o7uxugll9bwab.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/vn5vgcbphrtaajszr6fn.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hlfgqwj3chzij3t5erjv.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/y70y9zpnrnhw9pxqbenq.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ua4zwoxu3i9avrzrusre.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/dew9lns1imxv6ngmlmsq.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/cemesnztibailziek4ly.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zedk6plxdzanqoinnxla.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/a0t2zk1zww7gmanfoix3.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bgjwz6i6nfnqngx7ae36.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zfgce1seaqfllpuktpai.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/jslds8e2heskt4ebclte.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/xi4n6u5jtftsy9sbukd1.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/tm7zwaa7fprabjbwbemt.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/jve24exh4iwonznfndfc.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ajxwviujv7lrjghuhdxs.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/v6totnrrz9tl9fge8eyi.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ii2p41jbvrtktbtlhftn.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/litdnhptrj3uurnnzj0m.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zdxcoacbs8uqjynxmuh4.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/i4yfvoqdzya3dlizdyfk.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/o4iyywkwjc31epcmsmyo.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/vivqu9zlxbcv5mgxdjxq.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/dnn0oqu9q1r6dpq2lmr8.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/wmd0ftb9v4qsmladsdzv.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/sjsrx7m77v6pxswdm0mx.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hoqxujbnnumv1ildmus4.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/katmpcijwnmclxyfw3wr.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/a3b5gbgtfbtiqrdawpwp.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/tjmihf4uv326gkkz7mbk.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bfsviv4bu5yxoxxhwbeq.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hwi1ergmy7tibqa5bvyf.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ficuxtmo5kmd5bb8lmws.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/i6wu7n5sthrxgfpfibvx.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/nem2gkhh4jptjzjb0y2y.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/qjiprcu1e19yvujjrflv.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/y6pmwmuyxhqn0jxwgxxj.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mhwyzwfgaii3cw5s6jco.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/aaykth21moiquxkubywu.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/qwzpljolfstrtrqq083p.jpg", "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/h8osxwiem1fjujhthbok.jpg"];

/*
============================================
   download images
============================================
*/

(async () => {
    const promises = await Promise.all(images.map(async (image, i) => {
        const response = await fetch(image);
        const buffer = await response.buffer();
        return fs.writeFileSync(`${imagesDir}/challenge-${i}-main.jpg`, buffer);
        
    }))
})();
