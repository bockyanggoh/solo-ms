package client.command.commands.gm0;

import client.Client;
import client.command.Command;

public class BarryCommand extends Command {
    {
        setDescription("Open Barry's corner store.");
    }

    @Override
    public void execute(Client c, String[] params) {
        c.getAbstractPlayerInteraction().openNpc(9201088);
    }
}
