function paperRequirements(book1, book2, book3) {
    const requiredPagesForBook1 = book1 * 100;
    // console.log(requiredPagesForBook1,'- pages');
    const requiredPagesForBook2 = book2 * 200;
    // console.log(requiredPagesForBook2,'- pages');
    const requiredPagesForBook3 = book3 * 300;
    // console.log(requiredPagesForBook3,'- pages');
    const totalPages = requiredPagesForBook1 + requiredPagesForBook2 + requiredPagesForBook3;
    return totalPages;
}

const copiesOfBook1 = 5;
const copiesOfBook2 = 8;
const copiesOfBook3 = 3;
const numberOfTotalPages = paperRequirements(copiesOfBook1, copiesOfBook2, copiesOfBook3);
console.log(numberOfTotalPages,'pages');