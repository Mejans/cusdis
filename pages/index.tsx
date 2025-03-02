import React from 'react'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Footer } from '../components/Footer'
import { Head } from '../components/Head'
import { getSession, resolvedConfig, sentry } from '../utils.server'
import { GetServerSideProps, Redirect } from 'next'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";

type Props = {
  session: any
}

function IndexPage({ session }: Props) {
  const router = useRouter()

  const StartButton = session ? (
    <Button
      rightIcon={<ArrowForwardIcon />}
      onClick={() => router.push('/dashboard')}
      fontWeight="bold"
      color="gray.700"
    >
      Dashboard
    </Button>
  ) : (
    <Button
      onClick={() =>
        signIn(null, { callbackUrl: `${location.origin}/dashboard` })
      }
      fontWeight="bold"
      colorScheme="telegram"
    >
      Start for free
    </Button>
  )

  return (
    <>
      <Head title="Cusdis - Lightweight, privacy-first, open-source comment system" />
      <Box as="nav" py={4} mt={24} mb={12}>
        <Container maxWidth="3xl">
          <HStack>
            <Text fontWeight="bold" fontSize="2xl">
              Cusdis
            </Text>
            <Spacer />
            <Box display={['none', 'initial']}>
              <HStack>

              </HStack>
            </Box>


            {/* 
            <Link
              isExternal
              href="https://github.com/djyde/cusdis"
              fontWeight="bold"
              color="gray.700"
            >
              GitHub
          </Link> */}

          </HStack>
        </Container>
      </Box>

      <Container maxWidth="3xl">
        <VStack alignItems="start" spacing={16}>
          <Box>
            <Box mt={16} boxSizing="border-box">
              <Heading as="h1" size="4xl" fontSize={['5xl', '7xl']}><Text color="#014f86" as="span">Lightweight</Text>, <Text color="#2c7da0" as="span">privacy-first</Text>,  <Text color="#1b263b" as="span">open-source</Text> comment system</Heading>
            </Box>
            <Text fontSize="lg" mt={8} color="gray.700">
              <strong>Cusdis</strong> is an open-source, lightweight (~5kb gzipped), privacy-first <strong>alternative to Disqus</strong>. It's super easy to use and integrate with your existed website. We don't track you and your user.
            </Text>

            <HStack mt={12} spacing={4}>
              {StartButton}

              <Link fontWeight="medium" isExternal href="/doc">
                Documentation
              </Link>
            </HStack>
          </Box>

          <Box>
            <Img w="full" src="/images/landing.png" />
          </Box>

        </VStack>

      </Container>

      <Container maxWidth="3xl">
        <Heading mt={24} mb={12} letterSpacing="wide" color="gray.700" fontSize="md" textAlign="center">
          Integrate with frameworks and platforms with ease
        </Heading>
      </Container>

      <Box width="full">
        <Container maxWidth="3xl">
          <SimpleGrid columns={[2, 2, 4]} spacingY={12}>
            <LinkBox>
              <LinkOverlay isExternal href="/doc#/advanced/sdk">
                <Center>
                  <Img src="/images/vanilla.png" w={12} mt={6} />
                </Center>
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay isExternal href="https://github.com/Cusdis/sdk/tree/master/packages/react-cusdis">
                <Center>
                  <Img src="/images/react.png" w={24} mt={4} />
                </Center>
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay isExternal href="https://github.com/evillt/vue-cusdis">
                <Center>
                  <Img src="/images/vue.png" w={12} mt={8} />
                </Center>
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay isExternal href="#">
                <Center>
                  <Img src="/images/svelte.svg" w={24} mt={8} />
                </Center>
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay isExternal href="/doc#/integration/docsify">
                <Center>
                  <Img src="/images/docsify.svg" w={12} mt={6} />
                </Center>
              </LinkOverlay>
            </LinkBox>

            <LinkBox>
              <LinkOverlay isExternal href="http://blog.cusdis.com/integate-cusdis-in-hexo/">
                <Center>
                  <Img src="/images/hexo.svg" w={12} />
                </Center>
              </LinkOverlay>
            </LinkBox>
          </SimpleGrid>
        </Container>
      </Box>

      <Box mt={24}>
        <Container maxWidth="3xl">
          <Heading mb={24} textAlign="center">
            Features
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} textAlign="left" spacing={12}>
            <VStack alignItems="start">
              <Heading size="sm">Lightweight</Heading>
              <Box color="gray.500" fontSize="sm">
                The JS SDK embedded to your website is only around <strong>5kb</strong> gzipped.
              </Box>
            </VStack>
            <VStack alignItems="start">
              <Heading size="sm">Email Notification</Heading>
              <Box color="gray.500" fontSize="sm">
                You will receive Email notification when a new comment comes in, and approve the new comment without login.
              </Box>
            </VStack>
            <VStack alignItems="start">
              <Heading size="sm">Import from Disqus</Heading>
              <Box color="gray.500" fontSize="sm">
                One-click to import your existed data in Disqus to Cusdis.
              </Box>
            </VStack>
            <VStack alignItems="start">
              <Heading size="sm">Open source</Heading>
              <Box color="gray.500" fontSize="sm">
                Cusdis is an open-source project. Everyone can sure <strong>we don't track you and your user</strong>. Also, you can deploy your own Cusdis service with ease, to make sure you own your data.
              </Box>
              <Box pt={2}>
                <Link href="https://github.com/djyde/cusdis" isExternal>
                  <Icon w={8} h={8} as={GoMarkGithub} />
                </Link>
              </Box>
            </VStack>
          </SimpleGrid>


          <Box mt={24}>
            <Heading mb={12} textAlign="center">
              Pricing
            </Heading>

            <Center>
              <SimpleGrid columns={[1, 2]} spacing={8}>
                <VStack border="1px solid" borderColor="gray.200" py={6} rounded="lg">
                  <Heading size="xl" textAlign="center">$0</Heading>
                  <Box px={6} pb={3}>
                    <Text fontSize="sm" color="gray.500">
                      Free
                    </Text>
                  </Box>

                  <Box w="full" borderTop="1px solid" borderColor="gray.200" p={6}>
                    <List fontSize="sm" spacing={2}>
                      <ListItem>
                        <strong>3</strong> Websites
                    </ListItem>
                      <ListItem>
                        Email Notification
                    </ListItem>
                    </List>
                  </Box>
                </VStack>
                <VStack border="1px solid" borderColor="gray.200" py={6} rounded="lg">
                  <Heading size="xl" textAlign="center"><del>$1</del> <Text as="span" fontSize="sm">/month</Text></Heading>
                  <Box px={6} pb={3}>
                    <Text fontSize="sm" color="gray.500">
                      Cusdis is totally free for now.
                  </Text>
                  </Box>

                  <Box w="full" borderTop="1px solid" borderColor="gray.200" p={6}>
                    <List fontSize="sm" spacing={2}>
                      <ListItem>
                        <strong>Unlimited</strong> Websites
                    </ListItem>
                      <ListItem>
                        Email Notification
                    </ListItem>
                      <ListItem>
                        Webhook
                    </ListItem>
                      <ListItem>
                        Spam filter (comming soon)
                      </ListItem>
                    </List>
                  </Box>
                </VStack>
              </SimpleGrid>

            </Center>

            <VStack alignItems="start">
              <Text fontSize="sm" mt={12} color="gray.500">
                * We are not making money yet. Users sign up before we launch our paid plans will get three-months paid membership after the plans launch.
            </Text>

              <Text fontSize="sm" mt={12} color="gray.500">
                * If you like Cusdis. Consider <Link fontWeight="medium" textDecoration="underline" href="https://opencollective.com/cusdis" isExternal>sponsor us</Link> to help us be sustainable.
              </Text>
            </VStack>

          </Box>

          <Box mt={24} textAlign="center">
            {StartButton}
          </Box>

        </Container>
      </Box>

      <Footer maxWidth="3xl" />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> | Redirect = async (ctx) => {
  const session = await getSession(ctx.req)

  if (!resolvedConfig.isHosted) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }

  return {
    props: {
      session,
    },
  }
}

export default IndexPage
