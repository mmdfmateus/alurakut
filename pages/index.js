import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileConnectionsBoxWrapper } from '../src/components/ProfileConnections';

const ProfileSidebar = ({ githubUser }) => {

  return (
    <Box>
      <img src={ `https://github.com/${githubUser}.png` } style={{ borderRadius: '8px' }}/>
    </Box>
  );
}

export default function Home() {
  const githubUser = 'mmdfmateus';
  const connections = [
    'filipedeschamps',
    'felipefialho',
    'juunegreiros',
    'mmdfmateus',
    'omariosouto',
    'rmanguinho',
  ]

  return (
    <>
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} ></ProfileSidebar>
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1>Welcome</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileConnectionsBoxWrapper>
            <h2 className='smallTitle'>Connections ({connections.length})</h2>

            <ul>
              {connections.map((conn) => {
                return (
                  <li>
                    <a href={`/users/${conn}`} key={conn}>
                      <img src={`https://github.com/${conn}.png`} />
                      <span>{conn}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileConnectionsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
