import { UsersTable } from "@components";

function UsersPage() {
  return (
    <div>
      <UsersTable showPagination={true} actionsColumn={true} />
    </div>
  );
}

export { UsersPage };
