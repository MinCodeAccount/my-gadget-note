import { visit } from 'unist-util-visit';

export default function remarkBaseUrl() {
  return (tree, file) => {
    visit(tree, 'image', (node) => {
      // Check if the image URL is an absolute path (meaning from the domain root)
      if (node.url && node.url.startsWith('/')) {
        // Prepend the Astro base path (/min-note)
        // Keep in mind that Github Pages requires the base path in Production.
        node.url = '/min-note' + node.url;
      }
    });
    
    // Also handle HTML img tags that might be inside markdown
    visit(tree, 'html', (node) => {
      if (node.value && node.value.includes('<img') && node.value.includes('src="/')) {
        node.value = node.value.replace(/src="\//g, 'src="/min-note/');
      }
    });
  };
}
