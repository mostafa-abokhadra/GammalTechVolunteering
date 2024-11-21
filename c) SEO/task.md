all of the data mentioned are from Google Search Central documentation gathered and summarized by me💚

 1. **What is SEO**
    - it is the process of increasing the visibility of website pages on search engines in order to attract more relevant traffic
    -  search engine optimization is about helping search engines understand your content, and helping users find your site
 2. **Guidelines for Title Tags**
    -  every page on the site has a title specified in the \`&lt;title&gt;\` element.
    - descriptive and concise text for the\`&lt;title&gt;\` elements.
    - Avoid vague descriptors like "Home" for your home page, or "Profile" for a specific person's profile
    - avoid unnecessarily long or verbose text in your \`&lt;title&gt;\` 
    - Avoid keyword stuffing
    - dynamically update the &lt;title&gt; element to better reflect the actual content of the page
    - Brand the title of your home page only concisely 
    - ensure that the main title is distinctive from other text on a page and stands out as being the most prominent on the page e:g using a larger font, putting the title text in the first visible &lt;h1&gt; element on the page
    - title text must be in the same language as the primary content on your pages
    - avoid Half-empty &lt;title&gt; elements e:g errors when dynamically creating the title for each page
    - avoid obsolete titles e:g 2012 PageTitle, instead change to recent date
    - avoid titles that don't reflect the actual content of the website
 3. **Guidelines for Meta Descriptions**
    - use &lt;meta property="og:title" content="myPageTitle" /&gt; 
    - don't use these metatags  \`&lt;meta name="robots" content="noindex"&gt; and &lt;meta name="googlebot" content="noindex"&gt; \` unless needed
    - identify the language of the page by using the lang attribute on the html element.
    - (still will read more about it)
 4. **mobile first-indexing considerations**
    - don't show less information on your mobile version, Use the same clear and meaningful headings on the mobile site as you do on the desktop site and Make sure that your mobile site contains the same content as your desktop site
    - responsive mobile friendly website with the same URLs in all devices is better
    - Use the same robots meta tags and overall metadata on both versions of your site on the mobile and desktop site.
    - Don't lazy-load primary content upon user interaction
 5. **content Guidelines** 
    - use original information, comprehensive description, beyond the obvious in the website
    - additional value is added if website used web scrapping 
    - i will make the page trust worthy revealing me as the creator  by having \`about\` page 
    - i will create the pages as if i want for users to consider bookmarking or recommending it 
    - making sure no spelling or stylistic issues
    - making sure no easily verified factual errors
 6. **Page Experience considerations**
    - page should load quickly &lt; 2.5 second as recommended by google so i plan to Use formats like WebP and compress images to optimize the LCP
    - Optimize JavaScript to reduce blocking elements (still will read more about that)
    - remove unused code, splitting code, and only loading what is needed initially
    - Use of asynchronous loading
    - Use techniques like lazy loading and caching.(still will read more about the last)
    - Delay loading images or resources that are not immediately visible.
    - reduce the time it takes for the server to respond to requests by optimizing back-end processes, using caching
    - first input delay should be &lt; 100millisecond
    - use https, and secure cookies 
    - Enforcing strong password policies, and session expiration for logged-in users.
    - Use only minimal pop-ups on mobile, and prioritize content-first design.
    - Apply good contrast between colors 
    - Keep consistent margins and padding to separate different sections
 7. **Guidelines for Headings and text**
    - Use larger fonts for the main headings (H1) and important text.
    - \`font-display: swap\` in CSS helps to avoid the flash of unstyled text (FOUT) by displaying a fallback font until the main font loads.
    - Ensure font sizes are large enough to read on smaller screens. A base font size of at least 16px is often recommended. 
    - (still will read more about it)
 8. **Image and Media Optimization**
    - specify images height and width to avoid unexpected shift of content 
    - i will Use responsive images (like \`srcset\` in HTML) as needed


    - Specify file formats and sizes, alt text, and captions to ensure visual elements contribute to SEO and accessibility.
 9. **PopUps**
    - avoid large pop-ups, ads pop-ups, or overlays that cover the main content 
    - Use Smaller Banners or Pop-Ups
    - give users a chance to engage with your content before displaying any pop-ups or offers.
    - Make Interstitials Easy to Dismiss
10. **Buttons and links**
    - Make buttons and links large and well-spaced for easy tapping
    - Use at least 48px x 48px for clickable elements to avoid accidental clicks.
11. **Ensure Logical Navigation**
    - a hamburger menu (☰) or similar compact design for website navigation
    - Organize the structure to facilitate easy navigation and make sure it’s scalable for future additions, optimizing the user journey and reducing clicks to key pages.
12. **Optimize for Crawlability**
    - Design the structure to be accessible for search engines, minimizing orphan pages and avoiding overly complex or deep links.
13. **Define Content Types and Structure**
    - Plan for content types that will engage your audience, such as blogs, case studies, FAQs, or video content.
14. **Map Out Key Pages**
    sitemap link: <https://github.com/mostafa-abokhadra/Codacode/blob/main/sitemap.xml>

**most of the below questions i have already answered it in the above guidelines but i answered it again briefly focusing more on the not covered questions in the guidelines**

#### How Does a Backlink Strategy Affect SEO
Backlinks are links to your website from other websites. And backlinks from reputable and relevant sites can boost your search engine rankings.
#### How Does Robots.txt Affect SEO
i can specify in it which resource on my website i don't want for googlebot to crawl and index 
#### How Does a XML Sitemap Affect SEO
it is useful when you have a very large website , or if your website is new and has a few external links to it or if the website has a lot of rich media content. search engines then can use this sitemap file to crawl your site more efficiently
#### How Does Content Quality and Relevance Affect SEO
when a user search for a specific keyword, googlebot not only crawl the heading and titles to check for relevance with the user input, it also crawl the whole page to make sure that the page content is relevant to the user search input, and we will be actually violating google spam policy if we tried to manipulate google bot that way, which would make my website rank lower in the search results
#### How Does Keyword Optimization Affect SEO
well, googlebot look for big heading and tags in the website as well as the page content to determine relevance with the user search input, so using the words that our users would most likely to use when they search as our heading would increase our traffic, also using key word in the menu or nav bar links would be beneficial
#### How Does a User Engagement Signals Affect SEO
well there are the core web vitals like 1) large contentfull paint which ideally to be less that 2.5second for optimal user experience and engagements, FID or first input delay ideally to be less than 100milisecond and the cumulative layout shift which i think is crucial for optimal user engagement as the sudden shift of the content by slow loading time or popUps or links and advertisement make user frustrated and may lead to the user mistakenly click on one it
#### How Does Mobile Optimization and Performance Affect SEO
 google use mobile first indexing nowadays, so google bot will first crawl you website version of the website to index your website, so creating a similar content, metatags for your mobile version website is important as your desktop version, as well as a good responsiveness website that all users can use using different devices is the most recommended by google
#### How Does Structured Data (Schema Markup) Affect SEO
Google Search works hard to understand the content of a page, so structure data serves by providing explicit clues about the meaning of a page to Google by including structured data on the page, it can enable search results that are more engaging to users and might encourage them to interact more with your website, also using structure data use will be be able to search for your website using different words used in the schema
#### How Does Social Signals and Engagement Affect SEO?
it would Increase Content Visibility lead to more traffic to your website, which search engines may interpret as a sign of quality and relevance, it will increase the click-through-rates and lower bounce rates, it also may create an opportunity for backlinks by bloggers and journalists, user engagement also will fasten content indexing for the new websites
