create table if not exists public.scores (
  id bigint generated always as identity primary key,
  player_name text not null check (char_length(player_name) between 1 and 20),
  score integer not null check (score >= 0 and score <= 100000),
  level integer not null check (level >= 1 and level <= 1000),
  best_streak integer not null check (best_streak >= 0 and best_streak <= 1000),
  total_questions integer not null check (total_questions >= 1 and total_questions <= 100),
  correct_answers integer not null check (correct_answers >= 0 and correct_answers <= total_questions),
  created_at timestamptz not null default now()
);

alter table public.scores enable row level security;

drop policy if exists "Public can read leaderboard scores" on public.scores;
create policy "Public can read leaderboard scores"
  on public.scores
  for select
  to anon
  using (true);

drop policy if exists "Public can submit leaderboard scores" on public.scores;
create policy "Public can submit leaderboard scores"
  on public.scores
  for insert
  to anon
  with check (
    char_length(player_name) between 1 and 20
    and score >= 0
    and score <= 100000
    and level >= 1
    and level <= 1000
    and best_streak >= 0
    and best_streak <= 1000
    and total_questions between 1 and 100
    and correct_answers between 0 and total_questions
  );

create index if not exists scores_leaderboard_idx
  on public.scores (score desc, level desc, created_at asc);
