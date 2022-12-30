function editElement(ref, match, replacer) {
    let content = ref.textContent;
    content = content.replaceAll(match, replacer);
    ref.textContent = content;
}