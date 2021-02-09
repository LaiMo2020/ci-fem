
export const setTitle = title => {
    if (title) document.title = title;
    else document.title = 'CI FEM COHORT';
}
export const resetTitle = () => {
    document.title = 'CI FEM COHORT';
}
