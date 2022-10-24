function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const saab_images = importAll(require.context('./Images/Inside-Images/Saab/saab-finished', false, /\.(png|jpe?g|svg|JPG)$/));
const saab_finished_images = importAll(require.context('./Images/Inside-Images/Saab', false, /\.(png|jpe?g|svg|JPG)$/));
const amator_images = importAll(require.context('./Images/Inside-Images/Amator', false, /\.(png|jpe?g|svg|JPG)$/));
const unknown_images = importAll(require.context('./Images/Inside-Images/Unknown', false, /\.(png|jpe?g|svg|JPG)$/));

export default [
    saab_images,
    saab_finished_images,
    amator_images,
    unknown_images
];
