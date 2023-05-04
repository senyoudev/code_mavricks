import React from "react";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

interface NFT {
  NFTId: number;
  name: string;
}

interface NFTCardProps {
  nft: NFT;
}

const MarketplaceCard: React.FC<NFTCardProps> = ({
    nft,
}: NFTCardProps) => {
  const {
    NFTId,
    name,
  } = nft;

  return (
    <div className="bg-white rounded-md shadow-lg w-full overflow-hidden">
  <Grid.Container gap={2}>
    <Grid sm={12} md={3}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>Card Title 1</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>
            {NFTId}, {name}
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              Cancel
            </Button>
            <Button size="sm">Buy</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
    <Grid sm={12} md={3}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>Card Title 2</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>
          {NFTId}, {name}
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              Cancel
            </Button>
            <Button size="sm">Agree</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
    <Grid sm={12} md={3}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>Card Title 3</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>
          {NFTId}, {name}
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              Cancel
            </Button>
            <Button size="sm">Agree</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
    <Grid sm={12} md={3}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>Card Title 4</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>
          {NFTId}, {name}
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              Cancel
            </Button>
            <Button size="sm">Agree</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  </Grid.Container>
</div>

  );
};

export default MarketplaceCard;



