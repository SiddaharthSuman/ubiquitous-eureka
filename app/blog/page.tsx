'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
} from '@mui/material';
import {
  TrendingUp,
  Psychology,
  Business,
  Science,
  ArrowForward,
  CalendarToday,
  Person,
} from '@mui/icons-material';

import styles from './page.module.scss';

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt:
        'Discover the key AI trends that will shape enterprise technology in 2024, from generative AI to autonomous systems.',
      author: 'Dr. Jane Doe',
      date: 'January 15, 2024',
      category: 'AI Trends',
      readTime: '8 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'Building Scalable Machine Learning Infrastructure',
      excerpt:
        'Learn the best practices for designing and implementing ML infrastructure that can grow with your business needs.',
      author: 'John Smith',
      date: 'January 12, 2024',
      category: 'Technical',
      readTime: '12 min read',
      featured: true,
    },
  ];

  const recentPosts = [
    {
      id: 3,
      title: 'AI Ethics in Business: A Practical Guide',
      excerpt:
        'How to implement ethical AI practices in your organization while maintaining competitive advantage.',
      author: 'Maria Johnson',
      date: 'January 10, 2024',
      category: 'Ethics',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Transform Your Customer Service with AI Chatbots',
      excerpt:
        'Real-world examples of how AI chatbots are revolutionizing customer support and improving satisfaction.',
      author: 'David Wilson',
      date: 'January 8, 2024',
      category: 'Customer Experience',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Data Quality: The Foundation of Successful AI Projects',
      excerpt:
        'Why data quality matters more than algorithms and how to ensure your data is AI-ready.',
      author: 'Dr. Jane Doe',
      date: 'January 5, 2024',
      category: 'Data Science',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'AI ROI: Measuring the Business Impact of AI Investments',
      excerpt:
        'Comprehensive guide to calculating and demonstrating the return on investment for AI initiatives.',
      author: 'John Smith',
      date: 'January 3, 2024',
      category: 'Business Strategy',
      readTime: '10 min read',
    },
    {
      id: 7,
      title: 'The Rise of Edge AI: Computing at the Source',
      excerpt:
        'Exploring the benefits and challenges of deploying AI models on edge devices for real-time processing.',
      author: 'Maria Johnson',
      date: 'December 30, 2023',
      category: 'Technical',
      readTime: '11 min read',
    },
    {
      id: 8,
      title: 'AI in Healthcare: Transforming Patient Care',
      excerpt:
        'How artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.',
      author: 'Dr. Jane Doe',
      date: 'December 28, 2023',
      category: 'Healthcare',
      readTime: '8 min read',
    },
  ];

  return (
    <div className={styles.blogPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.heroTitle} variant="h1">
            AI <span className={styles.highlight}>Insights</span>
          </Typography>
          <Typography align="center" className={styles.heroSubtitle} variant="h2">
            Expert perspectives on artificial intelligence, machine learning, and the future of
            technology
          </Typography>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className={styles.featuredPosts}>
        <Container maxWidth="lg">
          <Typography className={styles.sectionTitle} variant="h2">
            Featured Articles
          </Typography>

          <Grid container className={styles.featuredGrid} spacing={4}>
            {featuredPosts.map((post) => (
              <Grid key={post.id} size={{ xs: 12, md: 6 }}>
                <Card className={styles.featuredCard}>
                  <CardContent className={styles.featuredContent}>
                    <Box className={styles.postMeta}>
                      <Chip className={styles.categoryChip} label={post.category} size="small" />
                      <Box className={styles.metaInfo}>
                        <Box className={styles.metaItem}>
                          <Person className={styles.metaIcon} />
                          <Typography variant="body2">{post.author}</Typography>
                        </Box>
                        <Box className={styles.metaItem}>
                          <CalendarToday className={styles.metaIcon} />
                          <Typography variant="body2">{post.date}</Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Typography className={styles.featuredTitle} variant="h3">
                      {post.title}
                    </Typography>

                    <Typography className={styles.featuredExcerpt} variant="h4">
                      {post.excerpt}
                    </Typography>

                    <Box className={styles.featuredFooter}>
                      <Typography className={styles.readTime} variant="body2">
                        {post.readTime}
                      </Typography>
                      <Button
                        className={styles.readMoreButton}
                        endIcon={<ArrowForward />}
                        variant="text"
                      >
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Recent Posts */}
      <section className={styles.recentPosts}>
        <Container maxWidth="lg">
          <Typography className={styles.sectionTitle} variant="h2">
            Latest Articles
          </Typography>

          <Grid container className={styles.recentGrid} spacing={4}>
            {recentPosts.map((post) => (
              <Grid key={post.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card className={styles.postCard}>
                  <CardContent className={styles.postContent}>
                    <Box className={styles.postMeta}>
                      <Chip className={styles.categoryChip} label={post.category} size="small" />
                      <Typography className={styles.readTime} variant="body2">
                        {post.readTime}
                      </Typography>
                    </Box>

                    <Typography className={styles.postTitle} variant="h4">
                      {post.title}
                    </Typography>

                    <Typography className={styles.postExcerpt} variant="h5">
                      {post.excerpt}
                    </Typography>

                    <Box className={styles.postFooter}>
                      <Box className={styles.authorInfo}>
                        <Person className={styles.authorIcon} />
                        <Typography variant="body2">{post.author}</Typography>
                      </Box>
                      <Typography className={styles.postDate} variant="body2">
                        {post.date}
                      </Typography>
                    </Box>

                    <Button
                      className={styles.readMoreButton}
                      endIcon={<ArrowForward />}
                      variant="text"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Explore by Category
          </Typography>

          <Grid container className={styles.categoriesGrid} spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box className={styles.categoryCard}>
                <TrendingUp className={styles.categoryIcon} />
                <Typography className={styles.categoryTitle} variant="h4">
                  AI Trends
                </Typography>
                <Typography className={styles.categoryCount} variant="h5">
                  12 articles
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box className={styles.categoryCard}>
                <Business className={styles.categoryIcon} />
                <Typography className={styles.categoryTitle} variant="h4">
                  Business Strategy
                </Typography>
                <Typography className={styles.categoryCount} variant="h5">
                  8 articles
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box className={styles.categoryCard}>
                <Science className={styles.categoryIcon} />
                <Typography className={styles.categoryTitle} variant="h4">
                  Technical Deep Dives
                </Typography>
                <Typography className={styles.categoryCount} variant="h5">
                  15 articles
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box className={styles.categoryCard}>
                <Psychology className={styles.categoryIcon} />
                <Typography className={styles.categoryTitle} variant="h4">
                  AI Ethics
                </Typography>
                <Typography className={styles.categoryCount} variant="h5">
                  6 articles
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <Container maxWidth="lg">
          <Box className={styles.newsletterContent}>
            <Typography align="center" className={styles.newsletterTitle} variant="h2">
              Stay Updated
            </Typography>
            <Typography align="center" className={styles.newsletterSubtitle} variant="h3">
              Get the latest AI insights delivered to your inbox
            </Typography>

            <Box className={styles.newsletterForm}>
              <TextField
                fullWidth
                className={styles.emailInput}
                placeholder="Enter your email address"
                variant="outlined"
              />
              <Button className={styles.subscribeButton} size="large" variant="contained">
                Subscribe
              </Button>
            </Box>

            <Typography align="center" className={styles.newsletterNote} variant="body2">
              No spam, unsubscribe at any time. We respect your privacy.
            </Typography>
          </Box>
        </Container>
      </section>
    </div>
  );
}
