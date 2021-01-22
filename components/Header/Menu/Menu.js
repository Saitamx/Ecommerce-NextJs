import {
  Container,
  Menu,
  Grid,
  Icon,
  Label,
  GridColumn,
} from "semantic-ui-react";

import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatform />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuPlatform() {
  return (
    <Menu>
      <Link href="/pacific-school">
        <Menu.Item as="a">Pacific School</Menu.Item>
      </Link>
      <Link href="/john-kennedy">
        <Menu.Item as="a">John Kennedy</Menu.Item>
      </Link>
      <Link href="/santa-ines">
        <Menu.Item as="a">Santa Inés</Menu.Item>
      </Link>
    </Menu>
  );
}

function MenuOptions() {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="user outline" />
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
